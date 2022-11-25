var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const User = require('./user.js'); // User Model 
//var url = 'mongodb://localhost:27017/test';

// Connection URL
const url = 'mongodb://localhost:27017';
const url2 = 'mongodb://localhost:27017/pixerart';
//const mongoDB = "mongodb://127.0.0.1/my_database";

// Database Name
//const dbName = 'pixerart';

/*exports.connexionMongo = async () => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	return db;
}*/
exports.connexionMongo = async () => {
	mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
	return db;
}

/*exports.createUser = async () => {
	const awesome_instance = new User({ username: "awesome",mdp:"test",role:"test",theme:"test" });

// Save the new model instance, passing a callback
awesome_instance.save((err) => {
  if (err) return handleError(err);
  // saved!
});
}*/
exports.getUsers = async () => {
	//let client = await MongoClient.connect(url, { useNewUrlParser: true });
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	//console.log(client)
	//let db = client.db(dbName);
	let reponse;
  let users;

	try {
			users = await db.collection('user')
				.find()
        .toArray();
		if(!users){
			reponse = {
				succes: false,
				msg: "aucun users",
				data: [],
			  }
		}else{
			reponse = {
				succes: true,
				msg: "users recherchés avec succès",
				data: users,
			  }
		}
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des users"
		};
	} finally {
		//client.close();
		return reponse;
	}
};

exports.getPixelBoards = async () => {
	/*let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);*/
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;
  let pixelBoard;

	try {
			pixelBoard = await db.collection('pixelBoard')
				.find()
        .toArray();
		if(!pixelBoard){
			reponse = {
				succes: false,
				msg: "aucun pixelBoard",
				data: [],
			  }
		}
        reponse = {
          succes: true,
          msg: "pixelBoard find avec succès",
          data: pixelBoard,
        }
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des pixelBoards"
		};
	} finally {
		//client.close();
		return reponse;
	}
};

exports.getUserByUsername = async (username) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "username": username };

		let data = await db.collection("user").findOne(myquery);
		if(!data){
			reponse = {
				succes: false,
				user: null,
				error: null,
				msg: "aucun user"
			};
		}else{
			reponse = {
				succes: true,
				user: data,
				error: null,
				msg: "User trouvé"
			};
		}
	} catch (err) {
		reponse = {
			succes: false,
			user: null,
			error: err,
			msg: "User non trouvé"
		};
	} finally {
		return reponse;
	}
}

exports.login = async (username,password) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "username": username};

		let data = await db.collection("user").findOne(myquery);
		const hash = await bcrypt.hash(password, 10)
		if(!data){
			reponse = {
				succes: false,
				login: false,
				error: null,
				msg: "aucun user"
			};
		}else{
			if(data.mdp==hash){
				reponse = {
					succes: false,
					login: true,
					error: null,
					msg: "login"
				};
			}else{
				reponse = {
					succes: false,
					login: false,
					error: null,
					msg: "wrong password"
				};
			}
		}
	} catch (err) {
		reponse = {
			succes: false,
			user: null,
			error: err,
			msg: "User non trouvé"
		};
	} finally {
		return reponse;
	}
}

exports.getPixelBoardById = async (id) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };

		let data = await db.collection("pixelBoard").findOne(myquery);
		if(!data){
			reponse = {
				succes: true,
				user: null,
				error: null,
				msg: "Aucun PixelBoard trouvé"
			};
		}else{
			reponse = {
				succes: true,
				user: data,
				error: null,
				msg: "PixelBoard trouvé"
			};
		}
	} catch (err) {
		reponse = {
			succes: false,
			user: null,
			error: err,
			msg: "PixelBoard introuvable"
		};
	} finally {
		return reponse;
	}
}

exports.getPixelBoardsByAuteur = async (auteur) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;
  let users;
  console.log("mongoDbConnect "+auteur)

	try {
		let query = { "auteur": auteur };

			users = await db.collection('pixelBoard')
				.find(query)
        .toArray();
		if(!users){
			reponse = {
				succes: true,
				msg: "pixelBoard find avec succès",
				data: users,
			  }
		}else{
			reponse = {
				succes: true,
				msg: "pixelBoard find avec succès",
				data: users,
			  }
		}
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des pixelBoards"
		};
	} finally {
		return reponse;
	}
};

exports.createUser = async (formData) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;
	const hash = await bcrypt.hash(formData.mdp, 10)
	try {
		let toInsert = {
			username: formData.username,
			mdp: hash,
			role: formData.role,
      theme:formData.theme
		};
		await db.collection("user").insertOne(toInsert);
		reponse = {
			succes: true,
			result: toInsert._id,
			msg: "Ajout réussi " + toInsert._id
		};
	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du insert"
		};
	} finally {
		return reponse;
	}
}
//TODO A améliorer
exports.createPixelBoard = async (formData) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;
	try {
		let toInsert = {
			statut: formData.statut,
			dateCreation: formData.dateCreation,
      taille:formData.taille,
			auteur: formData.auteur,
      mode:formData.mode,
      delai:formData.delai,
      title:formData.title,
      pixels:formData.pixels
		};
		await db.collection("pixelBoard").insertOne(toInsert);
		reponse = {
			succes: true,
			result: toInsert._id,
			msg: "Ajout réussi " + toInsert._id
		};
	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du insert"
		};
	} finally {
		return reponse;
	}
}

//TODO A améliorer?
exports.updateUser = async (id, formData) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };
		let newvalues = {
			$set: {
				mdp: formData.mdp,
				theme: formData.theme
			}
		};
		let result = await db.collection("user").updateOne(myquery, newvalues);

		reponse = {
			succes: true,
			result: result,
			error: null,
			msg: "Modification réussie " + result
		};
	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "Problème à la modification"
		};
	} finally {
		return reponse;
	}

}

//TODO A améliorer
exports.updatePixelBoard = async (id, formData) => {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };
		let newvalues = {
			$set: {
				mdp: formData.mdp,
				theme: formData.theme
			}
		};
		let result = await db.collection("pixelBoard").updateOne(myquery, newvalues);

		reponse = {
			succes: true,
			result: result,
			error: null,
			msg: "Modification réussie " + result
		};
	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "Problème à la modification"
		};
	} finally {
		return reponse;
	}

}

exports.deleteUser = async function (id, callback) {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };

		let result = await db.collection("user")
			.deleteOne(myquery);
		reponse = {
			succes: true,
			result: result,
			error: null,
			msg: "Suppression réussie " + result
		};

	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "Problème à la suppression"
		};
	} finally {
		return reponse;
	}
}

exports.deletePixelBoard = async function (id, callback) {
	await mongoose.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };

		let result = await db.collection("pixelBoard")
			.deleteOne(myquery);
		reponse = {
			succes: true,
			result: result,
			error: null,
			msg: "Suppression réussie " + result
		};

	} catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "Problème à la suppression"
		};
	} finally {
		return reponse;
	}
}

