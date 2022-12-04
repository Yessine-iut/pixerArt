var ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");
// Connection URL
console.log(`${process.env.API_URL}`)
const url = `mongodb://${process.env.API_URL}:27017/pixerart`;
exports.connexionMongo = async () => {
  mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  return db;
};
exports.getUsers = async () => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let users;

  try {
    users = await db.collection("users").find().toArray();
    if (!users) {
      reponse = {
        succes: false,
        msg: "aucun users",
        data: [],
      };
    } else {
      reponse = {
        succes: true,
        msg: "users recherchés avec succès",
        data: users,
      };
    }
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du find des users",
    };
  } finally {
    //client.close();
    return reponse;
  }
};
exports.getPixelBoards = async () => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let pixelBoards;

  try {
    pixelBoards = await db.collection("pixelBoards").find().toArray();
    if (!pixelBoards) {
      reponse = {
        succes: false,
        msg: "aucun users",
        data: [],
      };
    } else {
      reponse = {
        succes: true,
        msg: "pixelBoards recherchés avec succès",
        data: pixelBoards,
      };
    }
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "pixelBoards lors du find des users",
    };
  } finally {
    //client.close();
    return reponse;
  }
};
exports.getPixelBoardsAndContributions = async (username) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let pixelBoard;

  try {
    pixelBoard = await db.collection("pixelBoards").find().toArray();
    let rep=[]
    let contributions=0
    pixelBoard.forEach(element=>{
      for(let i=0;i<element.pixels.length;i++){
        if(element.pixels[i].auteur==username){
          contributions++
        }
      }
      rep.push(element)
    })
    if (!rep) {
      reponse = {
        succes: false,
        msg: "aucun pixelBoard",
        data: [],
      };
    }
    reponse = {
      succes: true,
      msg: "pixelBoard find avec succès",
      data: [rep,contributions],
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du find des pixelBoards",
    };
  } finally {
    return reponse;
  }
};
exports.getPixelBoardsContribuate = async (username) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let pixelBoard;

  try {
    pixelBoard = await db.collection("pixelBoards").find().toArray();
    let rep=[]
    let contributions=0
    pixelBoard.forEach(element=>{
      let isIn=false;
      for(let i=0;i<element.pixels.length;i++){
        if(element.pixels[i].auteur==username){
          contributions++
          isIn=true;
        }
      }
      if(isIn){
      rep.push(element)
      }
    })
    if (!rep) {
      reponse = {
        succes: false,
        msg: "aucun pixelBoard",
        data: [],
      };
    }
    reponse = {
      succes: true,
      msg: "pixelBoard find avec succès",
      data: [rep,contributions],
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du find des pixelBoards",
    };
  } finally {
    return reponse;
  }
};


exports.getLastFinishedPixelBoards = async () => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let pixelBoard;
  await db.collection("pixelBoards").find({statut:true}).limit(9).sort({"dateFin":-1}).toArray();
  try {
    pixelBoard = await db.collection("pixelBoards").find({statut:true}).limit(9).sort({"dateFin":-1}).toArray();
    if (!pixelBoard) {
      reponse = {
        succes: false,
        msg: "aucun pixelBoard",
        data: [],
      };
    }
    reponse = {
      succes: true,
      msg: "pixelBoard find avec succès",
      data: pixelBoard,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du find des pixelBoards",
    };
  } finally {
    return reponse;
  }
};

exports.getPixelBoardsLastCreated = async () => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  let pixelBoard;

  try {
    pixelBoard = await db.collection("pixelBoards").find({statut:false}).limit(9).sort({"dateCreation":-1}).toArray();
    if (!pixelBoard) {
      reponse = {
        succes: false,
        msg: "aucun pixelBoard",
        data: [],
      };
    }
    reponse = {
      succes: true,
      msg: "pixelBoard find avec succès",
      data: pixelBoard,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du find des pixelBoards",
    };
  } finally {
    return reponse;
  }
};

exports.getPixelBoardByField = async (myquery) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {

    let data = await db.collection("pixelBoards").find(myquery).toArray();
    if (!data) {
      reponse = {
        succes: true,
        pixelBoards: null,
        error: null,
        msg: "Aucun PixelBoard trouvé",
      };
    } else {
      reponse = {
        succes: true,
        pixelBoards: data,
        error: null,
        msg: "PixelBoard trouvé",
      };
    }
  } catch (err) {
    reponse = {
      succes: false,
      pixelBoards: null,
      error: err,
      msg: "PixelBoard introuvable",
    };
  } finally {
    return reponse;
  }
};
exports.getUserByUsername = async (username) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {
    let myquery = { username: username };

    let data = await db.collection("users").findOne(myquery);
    if (!data) {
      reponse = {
        succes: false,
        user: null,
        error: null,
        msg: "aucun user",
      };
    } else {
      reponse = {
        succes: true,
        user: data,
        error: null,
        msg: "User trouvé",
      };
    }
  } catch (err) {
    reponse = {
      succes: false,
      user: null,
      error: err,
      msg: "User non trouvé",
    };
  } finally {
    return reponse;
  }
};
exports.login = async (username, password) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {
    let myquery = { username: username };

    let data = await db.collection("users").findOne(myquery);
    const hash = await bcrypt.hash(password, 10);
    if (!data) {
      reponse = {
        succes: false,
        login: false,
        error: null,
        msg: "aucun user",
      };
    } else {
      if (data.password == hash) {
        reponse = {
          succes: false,
          login: true,
          error: null,
          msg: "login",
        };
      } else {
        reponse = {
          succes: false,
          login: false,
          error: null,
          msg: "wrong password",
        };
      }
    }
  } catch (err) {
    reponse = {
      succes: false,
      user: null,
      error: err,
      msg: "User non trouvé",
    };
  } finally {
    return reponse;
  }
};
exports.createUser = async (formData) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  const hash = await bcrypt.hash(formData.password, 10);
  try {
    let toInsert = {
      username: formData.username,
      password: hash,
      role: formData.role,
      theme: formData.theme,
    };
    await db.collection("users").insertOne(toInsert);
    reponse = {
      succes: true,
      result: toInsert._id,
      msg: "Ajout réussi " + toInsert._id,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du insert",
    };
  } finally {
    return reponse;
  }
};
exports.createPixelBoard = async (formData) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  try {
    let toInsert = {
      statut: formData.statut,
      dateCreation: formData.dateCreation,
      dateFin: formData.dateFin,
      taille: formData.taille,
      auteur: formData.auteur,
      mode: formData.mode,
      delai: formData.delai,
      titre: formData.titre,
      pixels: formData.pixels,
    };
    await db.collection("pixelBoards").insertOne(toInsert);
    reponse = {
      succes: true,
      result: toInsert._id,
      msg: "Ajout réussi " + toInsert._id,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "erreur lors du insert",
    };
  } finally {
    return reponse;
  }
};
exports.updateUser = async (id, formData) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {
    let myquery = { _id: ObjectId(id) };
    let newvalues = {
      $set: {
        password: formData.password,
        theme: formData.theme,
      },
    };
    let result = await db.collection("users").updateOne(myquery, newvalues);

    reponse = {
      succes: true,
      result: result,
      error: null,
      msg: "Modification réussie " + result,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "Problème à la modification",
    };
  } finally {
    return reponse;
  }
};
exports.updatePixelBoard = async (id, formData) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  try {
    let myquery = { _id: ObjectId(id) };
    let newvalues = {
      $set: {
        statut: formData.statut,
        dateCreation: formData.dateCreation,
        dateFin: formData.dateFin,
        taille: formData.taille,
        auteur: formData.auteur,
        mode: formData.mode,
        delai: formData.delai,
        titre: formData.titre,
        pixels: formData.pixels,
      },
    };
    let result = await db
      .collection("pixelBoards")
      .updateOne(myquery, newvalues);

    reponse = {
      succes: true,
      result: result,
      error: null,
      msg: "Modification réussie " + result,
    };
  } catch (err) {
    console.log(err);
    reponse = {
      succes: false,
      error: err,
      msg: "Problème à la modification",
    };
  } finally {
    return reponse;
  }
};
exports.deleteUser = async function (id, callback) {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {
    let myquery = { _id: ObjectId(id) };

    let result = await db.collection("users").deleteOne(myquery);
    reponse = {
      succes: true,
      result: result,
      error: null,
      msg: "Suppression réussie " + result,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "Problème à la suppression",
    };
  } finally {
    return reponse;
  }
};
exports.deletePixelBoard = async function (id, callback) {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;

  try {
    let myquery = { _id: ObjectId(id) };

    let result = await db.collection("pixelBoards").deleteOne(myquery);
    reponse = {
      succes: true,
      result: result,
      error: null,
      msg: "Suppression réussie " + result,
    };
  } catch (err) {
    reponse = {
      succes: false,
      error: err,
      msg: "Problème à la suppression",
    };
  } finally {
    return reponse;
  }
};
exports.addPixel = async (id, formData) => {
  await mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  let reponse;
  try {
    let myquery = { _id: ObjectId(id) };
    let data = await db.collection("pixelBoards").findOne(myquery);
    if (!data) {
      reponse = {
        succes: true,
        pixelBoard: null,
        error: null,
        msg: "Aucun PixelBoard trouvé",
      };
    } else {
      try {
		data.pixels.push(formData)
        let newvalues = {
          $set: {
            pixels: data.pixels,
          },
        };
        let result = await db
          .collection("pixelBoards")
          .updateOne(myquery, newvalues);
        reponse = {
          succes: true,
          result: result,
          error: null,
          msg: "Modification réussie " + result,
        };
      } catch (err) {
        console.log(err);
        reponse = {
          succes: false,
          error: err,
          msg: "Problème à la modification",
        };
      } finally {
        return reponse;
      }
    }
  } catch (err) {
    reponse = {
      succes: false,
      pixelBoard: null,
      error: err,
      msg: "PixelBoard introuvable",
    };
  } finally {
    return reponse;
  }
};
