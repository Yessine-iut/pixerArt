conn = new Mongo();
db = conn.getDB("pixerart");
db.users.createIndex({ "username": 1 }, { unique: true });
db.users.insertMany(
  [
    {
      "username": "Yessine",
      "mdp": "test",
      "role": "admin",
      "theme": "light"
    },
    {
      "username": "Hugo",
      "mdp": "test",
      "role": "admin",
      "theme": "dark"
    },
    {
      "username": "Saad",
      "mdp": "test2",
      "role": "client",
      "theme": "dark"
    }
  ]
);

db.pixelboards.insertMany([
  {
    "statut": true,
    "dateCreation": "01/06/2022",
    "dateFin": "01/09/2022",
    "taille": {
      "width": 50,
      "height": 50
    },
    "auteur": "Yessine",
    "mode": "test",
    "delai": 5,
    "titre": "Title",
    "pixels": [
      {
        "position": {
          "x": 60,
          "y": 80
        },
        "couleur": "blue",
        "auteur": "Saad"
      }
    ]
  }, {
    "statut": false,
    "dateCreation": "01/06/2022",
    "dateFin": null,
    "taille": {
      "width": 50,
      "height": 50
    },
    "auteur": "Yessine",
    "mode": "test2",
    "delai": 10,
    "titre": "PixerlBoard2",
    "pixels": [
      {
        "position": {
          "x": 90,
          "y": 20
        },
        "couleur": "dark",
        "auteur": "Yessine"
      },
      {
        "position": {
          "x": 91,
          "y": 21
        },
        "couleur": "yellow",
        "auteur": "Hugo"
      }, {
        "position": {
          "x": 92,
          "y": 21
        },
        "couleur": "red",
        "auteur": "Hugo"
      }
    ]
  }]);