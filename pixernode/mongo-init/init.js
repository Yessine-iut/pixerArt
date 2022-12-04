const User = require('../user');
const PixelBoard = require('../pixelboard');
let user1 = new User({username: 'Yessine',password:"test",role:"admin",theme:"light"});
let user2 = new User({username: 'Saad',password:"test2",role:"client",theme:"dark"});
let  pixelBoard1 = new PixelBoard({ statut: true, dateCreation: convertDate(new Date(2022, 06, 01)), dateFin: convertDate(new Date(2022, 09, 01)),taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "classique",delai: 5,titre: "Le bg",pixels: [
  {
    "position": {
      "x": 6287.799987792969,
      "y": 1135
    },
    "couleur": "#ddd",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 1574,
      "y": 20
    },
    "couleur": "#ddd",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 1190,
      "y": 250
    },
    "couleur": "#ddd",
    "auteur": "Saad"
  },
  {
    "position": {
      "x": 1642.9998779296875,
      "y": 105
    },
    "couleur": "#e01d1d",
    "auteur": "Saad"
  },
  {
    "position": {
      "x": 390.59999084472656,
      "y": 168
    },
    "couleur": "#ffeb00",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 376.066660563151,
      "y": 169
    },
    "couleur": "#ddd",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 382.7333272298177,
      "y": 166.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 361.3999938964844,
      "y": 167.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 354.7333272298177,
      "y": 163.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 337.3999938964844,
      "y": 167.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 318.7333272298177,
      "y": 171.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 309.3999938964844,
      "y": 187.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 309.3999938964844,
      "y": 207.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 313.3999938964844,
      "y": 221
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 322.7333272298177,
      "y": 226.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 330.7333272298177,
      "y": 227.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 338.7333272298177,
      "y": 227.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 350.7333272298177,
      "y": 227.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 356.066660563151,
      "y": 227.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 366.7333272298177,
      "y": 227.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 378.7333272298177,
      "y": 223.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 389.3999938964844,
      "y": 222.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 404.066660563151,
      "y": 190.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 401.3999938964844,
      "y": 203.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 401.3999938964844,
      "y": 215.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 402.7333272298177,
      "y": 178.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 401.3999938964844,
      "y": 169
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 345.3999938964844,
      "y": 165
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 329.3999938964844,
      "y": 166.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 500.066660563151,
      "y": 169
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 500.066660563151,
      "y": 177
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 498.7333272298177,
      "y": 182.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 500.066660563151,
      "y": 190.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 504.066660563151,
      "y": 206.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 510.73332722981763,
      "y": 217
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 521.3999938964844,
      "y": 222.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 537.3999938964844,
      "y": 225
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 548.066660563151,
      "y": 222.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 557.3999938964844,
      "y": 218.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 566.7333272298176,
      "y": 211.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 572.066660563151,
      "y": 202.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 578.7333272298176,
      "y": 189
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 580.066660563151,
      "y": 177
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 569.3999938964844,
      "y": 166.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 562.7333272298176,
      "y": 162.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 549.3999938964844,
      "y": 158.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 533.3999938964844,
      "y": 158.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 521.3999938964844,
      "y": 155.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 508.066660563151,
      "y": 153
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 500.066660563151,
      "y": 150.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 412.066660563151,
      "y": 190.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 426.7333272298177,
      "y": 191.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 442.7333272298177,
      "y": 189
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 437.3999938964844,
      "y": 189
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 452.066660563151,
      "y": 189
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 461.3999938964844,
      "y": 189
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 473.3999938964844,
      "y": 186.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 478.7333272298177,
      "y": 187.66666666666666
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 484.066660563151,
      "y": 186.33333333333331
    },
    "couleur": "#f8e71c",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 357.3999938964844,
      "y": 190.59999593098956
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 358.7333272298177,
      "y": 201.26666259765625
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 369.3999938964844,
      "y": 194.59999593098956
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 345.3999938964844,
      "y": 197.26666259765625
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 529.3999938964844,
      "y": 182.59999593098956
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 537.3999938964844,
      "y": 183.9333292643229
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 545.3999938964844,
      "y": 183.9333292643229
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 532.066660563151,
      "y": 191.9333292643229
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 537.3999938964844,
      "y": 191.9333292643229
    },
    "couleur": "#d0021b",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 452.066660563151,
      "y": 233
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 449.3999938964844,
      "y": 242.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 452.066660563151,
      "y": 254.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 453.3999938964844,
      "y": 270.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 454.7333272298177,
      "y": 286.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 460.066660563151,
      "y": 297
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 454.7333272298177,
      "y": 281
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 450.7333272298177,
      "y": 261
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 469.3999938964844,
      "y": 299.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 481.3999938964844,
      "y": 299.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 436.066660563151,
      "y": 373
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 445.3999938964844,
      "y": 375.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 462.7333272298177,
      "y": 374.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 452.066660563151,
      "y": 374.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 473.3999938964844,
      "y": 375.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 486.7333272298177,
      "y": 374.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 500.066660563151,
      "y": 370.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 493.3999938964844,
      "y": 370.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 510.73332722981763,
      "y": 369
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 517.3999938964844,
      "y": 365
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 328.066660563151,
      "y": 234.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 329.3999938964844,
      "y": 243.66666666666666
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 332.066660563151,
      "y": 254.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 334.7333272298177,
      "y": 263.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 340.066660563151,
      "y": 275.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 340.066660563151,
      "y": 286.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 345.3999938964844,
      "y": 301
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 350.7333272298177,
      "y": 314.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 358.7333272298177,
      "y": 325
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 362.7333272298177,
      "y": 333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 366.7333272298177,
      "y": 339.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 369.3999938964844,
      "y": 350.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 374.7333272298177,
      "y": 361
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 377.3999938964844,
      "y": 369
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 382.7333272298177,
      "y": 378.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 386.7333272298177,
      "y": 390.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 390.7333272298177,
      "y": 399.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 397.3999938964844,
      "y": 405
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 406.7333272298177,
      "y": 406.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 418.7333272298177,
      "y": 409
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 432.066660563151,
      "y": 410.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 441.3999938964844,
      "y": 414.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 449.3999938964844,
      "y": 417
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 460.066660563151,
      "y": 417
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 473.3999938964844,
      "y": 414.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 480.066660563151,
      "y": 411.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 489.3999938964844,
      "y": 413
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 494.7333272298177,
      "y": 413
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 502.7333272298177,
      "y": 410.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 582.7333272298176,
      "y": 215.66666666666666
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 588.066660563151,
      "y": 195.66666666666666
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 585.3999938964844,
      "y": 201
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 596.066660563151,
      "y": 190.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 606.7333272298176,
      "y": 183.66666666666666
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 612.066660563151,
      "y": 189
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 612.066660563151,
      "y": 201
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 612.066660563151,
      "y": 222.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 612.066660563151,
      "y": 207.66666666666666
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 610.7333272298176,
      "y": 233
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 598.7333272298176,
      "y": 241
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 246.33333333333331
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 259.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 281
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 270.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 594.7333272298176,
      "y": 289
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 596.066660563151,
      "y": 305
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 592.066660563151,
      "y": 322.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 592.066660563151,
      "y": 334.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 589.3999938964844,
      "y": 339.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 350.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 358.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 370.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 594.7333272298176,
      "y": 387.66666666666663
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 593.3999938964844,
      "y": 377
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 597.3999938964844,
      "y": 401
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 470.7333272298177,
      "y": 421
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 476.066660563151,
      "y": 441
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 474.7333272298177,
      "y": 433
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 478.7333272298177,
      "y": 446.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 480.066660563151,
      "y": 458.3333333333333
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 598.7333272298176,
      "y": 413
    },
    "couleur": "#f6ab34",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 316.066660563151,
      "y": 153
    },
    "couleur": "#232322",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 305.3999938964844,
      "y": 158.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 304.066660563151,
      "y": 147.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 304.066660563151,
      "y": 134.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 308.066660563151,
      "y": 121
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 318.7333272298177,
      "y": 126.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 330.7333272298177,
      "y": 118.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 342.7333272298177,
      "y": 114.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 356.066660563151,
      "y": 114.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 366.7333272298177,
      "y": 117
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 377.3999938964844,
      "y": 115.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 388.066660563151,
      "y": 109
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 400.066660563151,
      "y": 103.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 410.7333272298177,
      "y": 106.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 107.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 449.3999938964844,
      "y": 99.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 438.7333272298177,
      "y": 102.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 456.066660563151,
      "y": 98.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 468.066660563151,
      "y": 101
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 477.3999938964844,
      "y": 105
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 486.7333272298177,
      "y": 101
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 494.7333272298177,
      "y": 98.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 508.066660563151,
      "y": 102.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 518.7333272298176,
      "y": 106.33333333333333
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 534.7333272298176,
      "y": 99.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 526.7333272298176,
      "y": 99.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 544.066660563151,
      "y": 95.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 558.7333272298176,
      "y": 105
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 566.7333272298176,
      "y": 109
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 573.3999938964844,
      "y": 101
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 588.066660563151,
      "y": 93
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 593.3999938964844,
      "y": 89
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 597.3999938964844,
      "y": 101
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 597.3999938964844,
      "y": 126.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 596.066660563151,
      "y": 142.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 592.066660563151,
      "y": 115.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 597.3999938964844,
      "y": 165
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 177
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 592.066660563151,
      "y": 150.33333333333331
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 163.66666666666666
    },
    "couleur": "#ff7800",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 153.39999389648438,
      "y": 555.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 153.39999389648438,
      "y": 569
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 150.7333272298177,
      "y": 579.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 153.39999389648438,
      "y": 595.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 157.39999389648438,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 157.39999389648438,
      "y": 622.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 158.7333272298177,
      "y": 639.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 156.06666056315103,
      "y": 634.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 160.06666056315103,
      "y": 649
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 161.39999389648438,
      "y": 658.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 174.7333272298177,
      "y": 655.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 189.39999389648438,
      "y": 654.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 181.39999389648438,
      "y": 653
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 198.7333272298177,
      "y": 651.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 208.06666056315103,
      "y": 651.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 221.39999389648438,
      "y": 649
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 233.39999389648438,
      "y": 542.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 233.39999389648438,
      "y": 549
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 233.39999389648438,
      "y": 559.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 234.7333272298177,
      "y": 569
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 240.06666056315103,
      "y": 574.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 241.39999389648438,
      "y": 581
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 241.39999389648438,
      "y": 590.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 244.06666056315103,
      "y": 598.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 245.39999389648438,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 244.06666056315103,
      "y": 617
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 244.06666056315103,
      "y": 634.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 245.39999389648438,
      "y": 643.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 244.06666056315103,
      "y": 625
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 250.7333272298177,
      "y": 638.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 265.3999938964844,
      "y": 639.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 278.7333272298177,
      "y": 639.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 290.7333272298177,
      "y": 638.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 246.7333272298177,
      "y": 589
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 254.7333272298177,
      "y": 586.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 265.3999938964844,
      "y": 585
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 272.066660563151,
      "y": 585
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 281.3999938964844,
      "y": 585
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 242.7333272298177,
      "y": 539.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 253.39999389648438,
      "y": 539.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 265.3999938964844,
      "y": 537
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 272.066660563151,
      "y": 537
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 282.7333272298177,
      "y": 537
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 422.7333272298177,
      "y": 545
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 424.066660563151,
      "y": 558.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 569
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 578.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 593
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 609
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 617
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 425.3999938964844,
      "y": 629
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 418.7333272298177,
      "y": 529
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 426.7333272298177,
      "y": 527.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 436.066660563151,
      "y": 534.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 446.7333272298177,
      "y": 542.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 457.3999938964844,
      "y": 551.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 468.066660563151,
      "y": 557
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 478.7333272298177,
      "y": 553
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 494.7333272298177,
      "y": 537
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 489.3999938964844,
      "y": 541
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 509.3999938964844,
      "y": 526.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 514.7333272298176,
      "y": 531.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 514.7333272298176,
      "y": 549
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 510.73332722981763,
      "y": 542.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 516.066660563151,
      "y": 558.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 516.066660563151,
      "y": 573
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 518.7333272298176,
      "y": 589
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 521.3999938964844,
      "y": 602.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 521.3999938964844,
      "y": 615.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 574.7333272298176,
      "y": 533
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 524.066660563151,
      "y": 789
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 574.7333272298176,
      "y": 542.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 576.066660563151,
      "y": 553
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 577.3999938964844,
      "y": 561
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 585.3999938964844,
      "y": 578.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 588.066660563151,
      "y": 595.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 590.7333272298176,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 586.7333272298176,
      "y": 518.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 601.3999938964844,
      "y": 518.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 612.066660563151,
      "y": 515.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 632.066660563151,
      "y": 510.33333333333326
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 596.066660563151,
      "y": 569
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 610.7333272298176,
      "y": 567.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 628.066660563151,
      "y": 566.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 636.066660563151,
      "y": 562.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 597.3999938964844,
      "y": 615.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 606.7333272298176,
      "y": 611.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 622.7333272298176,
      "y": 609
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 653.3999938964844,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 640.066660563151,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 633.3999938964844,
      "y": 606.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 722.7333272298176,
      "y": 499.66666666666663
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 710.7333272298176,
      "y": 502.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 698.7333272298176,
      "y": 515.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 692.066660563151,
      "y": 522.3333333333333
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 685.3999938964844,
      "y": 533
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 684.066660563151,
      "y": 553
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 688.066660563151,
      "y": 569
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 702.7333272298176,
      "y": 581
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 722.7333272298176,
      "y": 589
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 741.3999938964844,
      "y": 587.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 754.7333272298176,
      "y": 583.6666666666666
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 729.3999938964844,
      "y": 585
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  },
  {
    "position": {
      "x": 717.3999938964844,
      "y": 585
    },
    "couleur": "#97ff26",
    "auteur": "Yessine"
  }
]});
 
let pixelBoard2 = new PixelBoard({ statut: false, dateCreation: convertDate(new Date(2022, 06, 01)), dateFin: convertDate(new Date(2023, 12, 30)),taille: {"width": 50,"height": 50},auteur: "Yessine",mode: "competitif",delai: 10,titre: "Nouveau",pixels: [{position: {x: 90,y: 20},couleur: "dark",auteur: "Yessine"}]});
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

  const handleError = function(err) {
    console.error(err);
};

setTimeout(()=>{
  process.exit(0)
},5000)

 function convertDate(yourDate){
    const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
  }