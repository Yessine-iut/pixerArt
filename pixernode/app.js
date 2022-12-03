const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const server = require('http').Server(app);
const mongoDBModule = require('./connectToMongoDb');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var multer = require('multer');
var multerData = multer();
const passport = require('passport');
const secureRoute = require('./routes');
var ObjectId = require("mongodb").ObjectID;
require('./auth/auth');
//var cors = require('cors');
//app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	//res.header("'Content-Type" , "application/json");
	//res.header("Accept" , "application/json");
	next();
});

app.options('/*', (_, res) => {
    res.sendStatus(200);
});

// Lance le serveur avec express
server.listen(port);
console.log("Serveur lancé sur le port : " + port);
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
// retourne tous les users
app.get('/api/users', (req, res) => {
	mongoDBModule.getUsers()
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.use('/api/user/:username', passport.authenticate('jwt', { session: false }), secureRoute);
app.get('/api/user/:username', (req, res) => {
	var username = req.params.username;
	mongoDBModule.getUserByUsername(username)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.get('/api/pixelBoards/:username', (req, res) => {
	var username = req.params.username;
	mongoDBModule.getPixelBoardsAndContributions(username)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
// Récupération d'un seul pixelBoard par son id
app.get('/api/pixelBoard/:id', (req, res) => {
	var id = req.params.id;
    let myquery = { _id: ObjectId(id) };
	mongoDBModule.getPixelBoardByField(myquery)
		.then(data => {
			res.send(JSON.stringify(data.pixelBoards[0]));
		});
});

app.get('/api/pixelBoardsByUsername/:username', (req, res) => {
	var username = req.params.username;
	mongoDBModule.getPixelBoardsContribuate(username)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
app.use('/api/pixelBoards', passport.authenticate('jwt', { session: false }), secureRoute);
app.post('/api/pixelBoards', multerData.fields([]), (req, res) => {
	mongoDBModule.createPixelBoard(req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

app.use('/api/user/:id', passport.authenticate('jwt', { session: false }), secureRoute);
app.put('/api/user/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;
	mongoDBModule.updateUser(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
app.use('/api/pixelBoard/:id', passport.authenticate('jwt', { session: false }), secureRoute);
app.put('/api/pixelBoard/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;
	mongoDBModule.updatePixelBoard(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
app.use('/api/addPixel/:id', passport.authenticate('jwt', { session: false }), secureRoute);
app.put('/api/addPixel/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;
	mongoDBModule.addPixel(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});
app.delete('/api/pixelBoard/:id', (req, res) => {
	var id = req.params.id;
	mongoDBModule.deleteUser(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
})
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

              return res.json({ token,user });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);



