var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

//var url = 'mongodb://localhost:27017/test';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pixerArt';

exports.connexionMongo = async () => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	return db;
}

exports.getUsers = async () => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;
  let users;

	try {
			users = await db.collection('user')
				.find()
        .toArray();
        reponse = {
          succes: true,
          msg: "users recherchés avec succès",
          data: users,
        }
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des users"
		};
	} finally {
		client.close();
		return reponse;
	}
};

exports.getPixelBoards = async () => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;
  let users;

	try {
			users = await db.collection('pixelBoard')
				.find()
        .toArray();
        reponse = {
          succes: true,
          msg: "pixelBoard find avec succès",
          data: users,
        }
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des pixelBoards"
		};
	} finally {
		client.close();
		return reponse;
	}
};

exports.getUserById = async (id) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };

		let data = await db.collection("user").findOne(myquery);

		reponse = {
			succes: true,
			user: data,
			error: null,
			msg: "User trouvé"
		};
	} catch (err) {
		reponse = {
			succes: false,
			user: null,
			error: err,
			msg: "User non trouvé"
		};
	} finally {
		client.close();
		return reponse;
	}
}
exports.getPixelBoardById = async (id) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;

	try {
		let myquery = { "_id": ObjectId(id) };

		let data = await db.collection("pixelBoard").findOne(myquery);

		reponse = {
			succes: true,
			user: data,
			error: null,
			msg: "PixelBoard trouvé"
		};
	} catch (err) {
		reponse = {
			succes: false,
			user: null,
			error: err,
			msg: "PixelBoard introuvable"
		};
	} finally {
		client.close();
		return reponse;
	}
}

exports.getPixelBoardsByAuteur = async (auteur) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;
  let users;
  console.log("mongoDbConnect "+auteur)

	try {
		let query = { "auteur": auteur };

			users = await db.collection('pixelBoard')
				.find(query)
        .toArray();
        reponse = {
          succes: true,
          msg: "pixelBoard find avec succès",
          data: users,
        }
		}
	catch (err) {
		reponse = {
			succes: false,
			error: err,
			msg: "erreur lors du find des pixelBoards"
		};
	} finally {
		client.close();
		return reponse;
	}
};

exports.createUser = async (formData) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
	let reponse;

	try {
		let toInsert = {
			username: formData.username,
			mdp: formData.mdp,
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
		client.close();
		return reponse;
	}
}
//TODO A améliorer
exports.createPixelBoard = async (formData) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
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
		client.close();
		return reponse;
	}
}

//TODO A améliorer?
exports.updateUser = async (id, formData) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
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
		client.close();
		return reponse;
	}

}

//TODO A améliorer
exports.updatePixelBoard = async (id, formData) => {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
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
		client.close();
		return reponse;
	}

}

exports.deleteUser = async function (id, callback) {
	console.log("test")
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
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
		client.close();
		return reponse;
	}
}

exports.deletePixelBoard = async function (id, callback) {
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	let db = client.db(dbName);
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
		client.close();
		return reponse;
	}
}

