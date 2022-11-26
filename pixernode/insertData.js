const PixelBoard = require('./pixelboard');
UserDetails.register({ username: 'Yessine', active: false,role:"admin",theme:"light"}, 'test');
UserDetails.register({ username: 'Saad', active: false,role:"client",theme:"dark" }, 'test2');
let  pixelBoard1 = new PixelBoard({ statut: true, dateCreation: new Date(2022, 06, 01), dateFin: new Date(2022, 09, 01),taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "test",delai: 5,titre: "Title",pixels: {position: {x: 60,y: 80},couleur: "blue",auteur: "Saad"}});
let pixelBoard2 = new PixelBoard({ statut: false, dateCreation: new Date(2022, 06, 01), dateFin: null,taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "test2",delai: 10,titre: "Title2",pixels: {position: {x: 90,y: 20},couleur: "dark",auteur: "Yessine"}});
pixelBoard1.save((err) => {
  if (err) return handleError(err);
});

pixelBoard2.save((err) => {
    if (err) return handleError(err);
  });