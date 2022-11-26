const User = require('./user');
const PixelBoard = require('./pixelboard');
let user1 = new User({username: 'Yessine',password:"test",role:"admin",theme:"light"});
let user2 = new User({username: 'Saad',password:"test2",role:"client",theme:"dark"});

let  pixelBoard1 = new PixelBoard({ statut: true, dateCreation: new Date(2022, 06, 01), dateFin: new Date(2022, 09, 01),taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "test",delai: 5,titre: "Title",pixels: [{position: {x: 60,y: 80},couleur: "blue",auteur: "Saad"},{position: {x: 80,y: 90},couleur: "red",auteur: "Yessine"}]});
let pixelBoard2 = new PixelBoard({ statut: false, dateCreation: new Date(2022, 06, 01), dateFin: null,taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "test2",delai: 10,titre: "Title2",pixels: [{position: {x: 90,y: 20},couleur: "dark",auteur: "Yessine"}]});
pixelBoard1.save((err) => {
  if (err) return handleError(err);
});

pixelBoard2.save((err) => {
    if (err) return handleError(err);
  });
  user1.save((err) => {
    if (err) return handleError(err);
  });
  user2.save((err) => {
    if (err) return handleError(err);
  });