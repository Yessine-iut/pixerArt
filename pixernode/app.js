const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const server = require('http').Server(app);
// pour les formulaires multiparts
var multer = require('multer');
var multerData = multer();
const passport = require('passport');
const mongoDBModule = require('./connectToMongoDb');
const jwt = require('jsonwebtoken');
// Pour les formulaires standards
const bodyParser = require('body-parser');
// pour les formulaires multiparts
var multer = require('multer');
var multerData = multer();

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(__dirname + '/public'));
// Paramètres standards du modyle bodyParser
// qui sert à récupérer des paramètres reçus
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

	next();
});

app.options('/*', (_, res) => {
    res.sendStatus(200);
});

// Lance le serveur avec express
server.listen(port);
console.log("Serveur lancé sur le port : " + port);

//------------------
// ROUTES
//------------------
// Utile pour indiquer la home page, dans le cas
// ou il ne s'agit pas de public/index.html
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
// Ici des routes en :
// http GET (pour récupérer des données)
// http POST : pour insérer des données
// http PUT pour modifier des données
// http DELETE pour supprimer des données

//----------------------------------------------
// Ces routes forment l'API de l'application !!
//----------------------------------------------

// Test de la connexion à la base
app.get('/api/connection', (req, res) => {
	// Pour le moment on simule, mais après on devra
	// réellement se connecte à la base de données
	// et renvoyer une valeur pour dire si tout est ok
	mongoDBModule.connexionMongo()
		.then(db => {
			let reponse;

			if (!db) {
				console.log("erreur connexion");
				reponse = {
					msg: "erreur de connexion err=" + err
				}
			} else {
				reponse = {
					msg: "connexion établie"
				}
			}
			res.send(JSON.stringify(reponse));
		});
});

app.get('/api/createUsers', (req, res) => {
	mongoDBModule.createUser();
});
app.get('/api/users', (req, res) => {
	mongoDBModule.getUsers()
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
// Récupération d'un seul user par son id
app.get('/api/user/:username', (req, res) => {
	var username = req.params.username;

	mongoDBModule.getUserByUsername(username)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// Récupération d'un seul user par son id
app.get('/api/pixelBoardsByAuteur/:auteur', (req, res) => {
	var auteur = req.params.auteur;
	mongoDBModule.getPixelBoardsByAuteur(auteur)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.get('/api/pixelBoards', (req, res) => {
	mongoDBModule.getPixelBoards()
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
// Récupération d'un seul pixelBoard par son id
app.get('/api/pixelBoard/:id', (req, res) => {
	var id = req.params.id;

	mongoDBModule.getPixelBoardById(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// On fera l'insert par un POST, c'est le standard REST
app.post('/api/users', multerData.fields([]), (req, res) => {
	mongoDBModule.createUser(req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.post('/api/pixelBoards', multerData.fields([]), (req, res) => {
	mongoDBModule.createPixelBoard(req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// Modification d'un restaurant, on fera l'update par
// une requête http PUT, c'est le standard REST
app.put('/api/user/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;
	mongoDBModule.updateUser(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.put('/api/pixelBoard/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;
	mongoDBModule.updatePixelBoard(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// Suppression d'un restaurant
// On fera la suppression par une requête http DELETE
// c'est le standard REST
app.delete('/api/user/:id', (req, res) => {
	var id = req.params.id;
	mongoDBModule.deleteUser(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
})
app.delete('/api/pixelBoard/:id', (req, res) => {
	var id = req.params.id;
	mongoDBModule.deleteUser(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
})
// ...

const router = express.Router();

// ...
app.post(
	'/signup',
	passport.authenticate('signup', { session: false }),
	async (req, res, next) => {
	  res.json({
		message: 'Signup successful',
		user: req.user
	  });
	}
  );
  
app.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);




