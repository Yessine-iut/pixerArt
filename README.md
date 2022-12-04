# pixerArt
Projet M2 du module Serveur Side JavaScript

Vidéo de démo du projet disponible [ici](https://www.youtube.com/)

Le bonus "exporter un PixelBoard en image" a été fait.  

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
Un docker-compose.yml permet de construire et démarrer:
- le frontend (pixerart) sur le port 3000,
- le backend (pixernode) sur le port 8080,
- le mongo database sur le port 27017,
- un mongo express sur le port 8111.
Pour les lancer, faites : 
```bash
sudo docker compose up --build
```
------
Sinon, vous pouvez lancer le backend et le frontend sans utiliser docker. Pour cela :   

- avoir un service mongo tournant sur localhost:27017.  
(l'ip "localhost" peut être changée via le fichier pixernode/.env.dev)

- lancer le backend dans une console : 
```bash
cd pixernode
npm i
npm run dev
```
Plusieurs modes de lancement (npm run) sont disponibles tels que "test", "dev", "dev-init"  (cf : /pixernode/package.json rubrique scripts)

- lancer le frontend dans une console : 
```bash
cd pixerart
npm i
npm start
```
