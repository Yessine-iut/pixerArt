# pixerArt
Projet M2 du module Serveur Side JavaScript

# modèle de données
Utilisateur: 
- username:String (unique)
- mdp:String (mot de passe)
- role:String (admin, client)
- theme:String (dark ou light thème du navigateur)
	     

PixelBoard: 
- statut : Boolean (en cours de création ou terminée)
- dateCreation: String
- dateFin: String
- taille: {width:int,height:int} (en pixel)
- auteur: String (createur du pixelBoard)
- mode: String (par exemple j'autorise ou non la possibilité de dessiner sur un pixel déjà utilisé)
- delai:int (délai entre chaque collaboration du même utilisateur) 
- titre: string
- pixels: {
		     position:{x:int,y:int},
		     couleur:String,
		     auteur:String
		    }

# Lancer le projet 
## Lancer la base de données dockerizée
```bash
cd pixernode
sudo docker compose up
```

## Lancer le backend
```bash
cd pixernode
npm i
node app.js
```

## Lancer le frontend
```bash
cd pixerart
npm i
npm start
```