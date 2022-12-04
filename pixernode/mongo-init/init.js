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

let pixelBoard4 = new PixelBoard({
  statut: false,
  dateCreation: convertDate(new Date(2022, 12, 04)),
  dateFin: convertDate(new Date(2022, 12, 25)),
  taille: {
    "height": 60,
    "width": 60
  },
  auteur: "yy",
  mode: "competitif",
  delai: 0,
  titre: "LeMeilleurPixelBoard",
  pixels: [
    {
      position: {
        x: 97.79998779296875,
        y: 746.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 121.79998779296875,
        y: 746.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 127.79998779296875,
        y: 746.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 153.79998779296875,
        y: 746.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 153.79998779296875,
        y: 746.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 259.79998779296875,
        y: 748.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 363.79998779296875,
        y: 748.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 379.79998779296875,
        y: 748.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 473.79998779296875,
        y: 750.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 755.7999877929688,
        y: 752.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 755.7999877929688,
        y: 752.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 841.7999877929688,
        y: 764.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 841.7999877929688,
        y: 764.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 758.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 758.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 758.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 621.7999877929688,
        y: 742.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 527.7999877929688,
        y: 754.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 741.7999877929688,
        y: 742.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 817.7999877929688,
        y: 740.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 827.7999877929688,
        y: 740.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 871.7999877929688,
        y: 744.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 945.7999877929688,
        y: 754.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 961.7999877929688,
        y: 756.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 1007.7999877929688,
        y: 756.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 1007.7999877929688,
        y: 756.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 1007.7999877929688,
        y: 756.3999938964844
      },
      couleur: "#4a90e2",
      auteur: "yy"
    },
    {
      position: {
        x: 295.79998779296875,
        y: 576.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 235.79998779296875,
        y: 556.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 235.79998779296875,
        y: 556.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 331.79998779296875,
        y: 604.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 343.79998779296875,
        y: 612.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 345.79998779296875,
        y: 616.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 373.79998779296875,
        y: 644.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 373.79998779296875,
        y: 644.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 429.79998779296875,
        y: 688.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 429.79998779296875,
        y: 688.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 429.79998779296875,
        y: 688.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 429.79998779296875,
        y: 688.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 373.79998779296875,
        y: 656.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 389.79998779296875,
        y: 664.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 393.79998779296875,
        y: 666.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 443.79998779296875,
        y: 694.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 461.79998779296875,
        y: 714.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 501.79998779296875,
        y: 722.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 571.7999877929688,
        y: 722.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 549.7999877929688,
        y: 722.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 537.7999877929688,
        y: 722.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 641.7999877929688,
        y: 718.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 595.7999877929688,
        y: 724.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 679.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 703.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 711.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 715.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 785.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 785.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 801.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 825.7999877929688,
        y: 698.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 833.7999877929688,
        y: 682.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 678.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 678.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 678.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 879.7999877929688,
        y: 620.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 833.7999877929688,
        y: 698.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 855.7999877929688,
        y: 668.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 855.7999877929688,
        y: 668.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 865.7999877929688,
        y: 654.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 865.7999877929688,
        y: 654.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 879.7999877929688,
        y: 632.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 897.7999877929688,
        y: 584.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 909.7999877929688,
        y: 572.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 891.7999877929688,
        y: 590.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 891.7999877929688,
        y: 594.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 287.79998779296875,
        y: 542.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 305.79998779296875,
        y: 542.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 305.79998779296875,
        y: 542.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 361.79998779296875,
        y: 546.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 361.79998779296875,
        y: 546.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 377.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 377.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 377.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 401.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 477.79998779296875,
        y: 552.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 439.79998779296875,
        y: 552.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 529.7999877929688,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 499.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 571.7999877929688,
        y: 550.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 617.7999877929688,
        y: 550.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 617.7999877929688,
        y: 550.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 697.7999877929688,
        y: 556.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 657.7999877929688,
        y: 556.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 601.7999877929688,
        y: 540.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 649.7999877929688,
        y: 540.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 713.7999877929688,
        y: 550.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 751.7999877929688,
        y: 554.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 787.7999877929688,
        y: 562.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 566.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 905.7999877929688,
        y: 566.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 599.7999877929688,
        y: 528.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 597.7999877929688,
        y: 494.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 597.7999877929688,
        y: 494.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 597.7999877929688,
        y: 494.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 597.7999877929688,
        y: 494.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 468.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 468.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 599.7999877929688,
        y: 384.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 458.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 396.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 398.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 410.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 532.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 488.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 460.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 454.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 406.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 374.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 647.7999877929688,
        y: 324.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 585.7999877929688,
        y: 384.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 326.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 595.7999877929688,
        y: 318.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 595.7999877929688,
        y: 318.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 595.7999877929688,
        y: 296.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 619.7999877929688,
        y: 292.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 627.7999877929688,
        y: 292.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 639.7999877929688,
        y: 308.3999938964844
      },
      couleur: "#8b572a",
      auteur: "yy"
    },
    {
      position: {
        x: 485.79998779296875,
        y: 372.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 609.7999877929688,
        y: 376.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 609.7999877929688,
        y: 376.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 549.7999877929688,
        y: 376.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 537.7999877929688,
        y: 376.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 465.79998779296875,
        y: 360.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 493.79998779296875,
        y: 318.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 493.79998779296875,
        y: 318.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 501.79998779296875,
        y: 314.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 513.7999877929688,
        y: 296.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 533.7999877929688,
        y: 274.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 565.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 577.7999877929688,
        y: 224.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 206.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 599.7999877929688,
        y: 198.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 625.7999877929688,
        y: 168.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 629.7999877929688,
        y: 160.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 653.7999877929688,
        y: 194.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 665.7999877929688,
        y: 204.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 723.7999877929688,
        y: 270.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 699.7999877929688,
        y: 228.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 681.7999877929688,
        y: 216.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 733.7999877929688,
        y: 266.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 713.7999877929688,
        y: 242.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 713.7999877929688,
        y: 242.39999389648438
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 735.7999877929688,
        y: 268.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 308.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 777.7999877929688,
        y: 336.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 797.7999877929688,
        y: 368.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 641.7999877929688,
        y: 386.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 675.7999877929688,
        y: 386.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 711.7999877929688,
        y: 388.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 753.7999877929688,
        y: 390.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    },
    {
      position: {
        x: 797.7999877929688,
        y: 390.3999938964844
      },
      couleur: "#ffffff",
      auteur: "yy"
    }
  ]
});

let pixelBoard5 = new PixelBoard({
  statut: false,
  dateCreation: convertDate(new Date(2022, 12, 04)),
  dateFin: convertDate(new Date(2023, 02, 03)),
  taille: {
    "height": 50,
    "width": 50
  },
  auteur: "yy",
  mode: "classique",
  delai: 0,
  titre: "53JS",
  pixels: [
    {
      position: {
        x: 181.79998779296875,
        y: 242.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 189.79998779296875,
        y: 242.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 197.79998779296875,
        y: 242.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 227.79998779296875,
        y: 242.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 213.79998779296875,
        y: 238.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 245.79998779296875,
        y: 238.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 273.79998779296875,
        y: 238.39999389648438
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 179.79998779296875,
        y: 258.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 179.79998779296875,
        y: 268.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 177.79998779296875,
        y: 282.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 181.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 187.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 199.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 205.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 215.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 237.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 273.79998779296875,
        y: 326.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 257.79998779296875,
        y: 310.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 287.79998779296875,
        y: 350.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 273.79998779296875,
        y: 360.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 261.79998779296875,
        y: 366.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 251.79998779296875,
        y: 368.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 235.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 213.79998779296875,
        y: 372.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 201.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 159.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 183.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 149.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 277.79998779296875,
        y: 336.3999938964844
      },
      couleur: "#50e3c2",
      auteur: "yy"
    },
    {
      position: {
        x: 507.79998779296875,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 531.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 523.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 565.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 541.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 585.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 551.7999877929688,
        y: 236.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 541.7999877929688,
        y: 252.39999389648438
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 541.7999877929688,
        y: 282.3999938964844
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 541.7999877929688,
        y: 292.3999938964844
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 535.7999877929688,
        y: 318.3999938964844
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 515.7999877929688,
        y: 340.3999938964844
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 477.79998779296875,
        y: 340.3999938964844
      },
      couleur: "#f8e71c",
      auteur: "yy"
    },
    {
      position: {
        x: 719.7999877929688,
        y: 364.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 701.7999877929688,
        y: 356.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 695.7999877929688,
        y: 356.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 669.7999877929688,
        y: 338.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 655.7999877929688,
        y: 318.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 667.7999877929688,
        y: 300.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 685.7999877929688,
        y: 292.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 749.7999877929688,
        y: 288.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 701.7999877929688,
        y: 296.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 773.7999877929688,
        y: 272.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 337.79998779296875,
        y: 224.39999389648438
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 383.79998779296875,
        y: 230.39999389648438
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 417.79998779296875,
        y: 278.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 389.79998779296875,
        y: 300.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 351.79998779296875,
        y: 300.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 365.79998779296875,
        y: 312.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 405.79998779296875,
        y: 330.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 405.79998779296875,
        y: 354.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 371.79998779296875,
        y: 370.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 343.79998779296875,
        y: 366.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    },
    {
      position: {
        x: 337.79998779296875,
        y: 366.3999938964844
      },
      couleur: "#bd10e0",
      auteur: "yy"
    }
  ]
});

let pixelBoard6 = new PixelBoard({
  statut: false,
  dateCreation: convertDate(new Date(2022, 12, 04)),
  dateFin: convertDate(new Date(2023, 01, 04)),
  taille: {
    "height": 50,
    "width": 50
  },
  auteur: "yy",
  mode: "classique",
  delai: 0,
  titre: "France>All",
  pixels: [
    {
      position: {
        x: 133.79998779296875,
        y: 704.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 133.79998779296875,
        y: 676.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 133.79998779296875,
        y: 648.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 133.79998779296875,
        y: 634.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 123.79998779296875,
        y: 510.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 125.79998779296875,
        y: 550.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 125.79998779296875,
        y: 556.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 133.79998779296875,
        y: 594.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 131.79998779296875,
        y: 516.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 131.79998779296875,
        y: 538.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 173.79998779296875,
        y: 514.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 161.79998779296875,
        y: 514.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 95.79998779296875,
        y: 520.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 137.79998779296875,
        y: 690.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 161.79998779296875,
        y: 690.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 171.79998779296875,
        y: 690.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 189.79998779296875,
        y: 690.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 203.79998779296875,
        y: 690.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 227.79998779296875,
        y: 684.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 636.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 626.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 614.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 580.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 572.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 221.79998779296875,
        y: 558.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 219.79998779296875,
        y: 532.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 203.79998779296875,
        y: 506.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 165.79998779296875,
        y: 532.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 165.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 163.79998779296875,
        y: 564.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 167.79998779296875,
        y: 620.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 153.79998779296875,
        y: 532.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 141.79998779296875,
        y: 532.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 141.79998779296875,
        y: 546.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 141.79998779296875,
        y: 558.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 207.79998779296875,
        y: 568.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 207.79998779296875,
        y: 548.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 149.79998779296875,
        y: 660.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 205.79998779296875,
        y: 608.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 197.79998779296875,
        y: 668.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 179.79998779296875,
        y: 594.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 153.79998779296875,
        y: 584.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 153.79998779296875,
        y: 604.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 183.79998779296875,
        y: 638.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 197.79998779296875,
        y: 636.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 183.79998779296875,
        y: 656.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 203.79998779296875,
        y: 562.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 203.79998779296875,
        y: 554.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 189.79998779296875,
        y: 588.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 195.79998779296875,
        y: 562.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 195.79998779296875,
        y: 544.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 197.79998779296875,
        y: 538.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 149.79998779296875,
        y: 642.3999938964844
      },
      couleur: "#2517c4",
      auteur: "yy"
    },
    {
      position: {
        x: 243.79998779296875,
        y: 668.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 245.79998779296875,
        y: 612.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 245.79998779296875,
        y: 642.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 251.79998779296875,
        y: 676.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 293.79998779296875,
        y: 670.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 269.79998779296875,
        y: 668.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 279.79998779296875,
        y: 668.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 301.79998779296875,
        y: 668.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 317.79998779296875,
        y: 666.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 369.79998779296875,
        y: 666.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 343.79998779296875,
        y: 660.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 369.79998779296875,
        y: 632.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 369.79998779296875,
        y: 616.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 365.79998779296875,
        y: 568.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 361.79998779296875,
        y: 494.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 361.79998779296875,
        y: 508.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 253.79998779296875,
        y: 500.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 261.79998779296875,
        y: 496.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 297.79998779296875,
        y: 496.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 335.79998779296875,
        y: 492.3999938964844
      },
      couleur: "#fdfdff",
      auteur: "yy"
    },
    {
      position: {
        x: 391.79998779296875,
        y: 660.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 415.79998779296875,
        y: 660.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 509.79998779296875,
        y: 652.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 477.79998779296875,
        y: 658.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 439.79998779296875,
        y: 658.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 517.7999877929688,
        y: 634.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 517.7999877929688,
        y: 610.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 509.79998779296875,
        y: 550.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 509.79998779296875,
        y: 504.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 511.79998779296875,
        y: 572.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 505.79998779296875,
        y: 516.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 489.79998779296875,
        y: 488.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 423.79998779296875,
        y: 486.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 405.79998779296875,
        y: 486.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 397.79998779296875,
        y: 486.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 465.79998779296875,
        y: 472.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 461.79998779296875,
        y: 484.3999938964844
      },
      couleur: "#d0021b",
      auteur: "yy"
    },
    {
      position: {
        x: 213.79998779296875,
        y: 340.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 243.79998779296875,
        y: 344.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 285.79998779296875,
        y: 348.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 297.79998779296875,
        y: 348.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 333.79998779296875,
        y: 348.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 385.79998779296875,
        y: 342.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 315.79998779296875,
        y: 348.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 357.79998779296875,
        y: 348.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 421.79998779296875,
        y: 340.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 453.79998779296875,
        y: 334.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 557.7999877929688,
        y: 328.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 483.79998779296875,
        y: 326.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 507.79998779296875,
        y: 326.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 213.79998779296875,
        y: 324.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 227.79998779296875,
        y: 314.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 243.79998779296875,
        y: 310.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 249.79998779296875,
        y: 308.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 259.79998779296875,
        y: 290.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 307.79998779296875,
        y: 290.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 275.79998779296875,
        y: 292.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 293.79998779296875,
        y: 292.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 301.79998779296875,
        y: 292.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 341.79998779296875,
        y: 284.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 411.79998779296875,
        y: 266.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 351.79998779296875,
        y: 284.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 445.79998779296875,
        y: 264.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 419.79998779296875,
        y: 274.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 469.79998779296875,
        y: 262.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 501.79998779296875,
        y: 256.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 533.7999877929688,
        y: 250.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 541.7999877929688,
        y: 244.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 565.7999877929688,
        y: 244.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 631.7999877929688,
        y: 258.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 583.7999877929688,
        y: 246.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 581.7999877929688,
        y: 326.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 629.7999877929688,
        y: 310.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 679.7999877929688,
        y: 272.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 641.7999877929688,
        y: 266.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 665.7999877929688,
        y: 278.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 359.79998779296875,
        y: 284.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 409.79998779296875,
        y: 304.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 389.79998779296875,
        y: 292.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 463.79998779296875,
        y: 264.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 481.79998779296875,
        y: 270.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 509.79998779296875,
        y: 282.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 555.7999877929688,
        y: 244.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 581.7999877929688,
        y: 260.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 561.7999877929688,
        y: 250.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 621.7999877929688,
        y: 246.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 593.7999877929688,
        y: 240.39999389648438
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 521.7999877929688,
        y: 318.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 537.7999877929688,
        y: 324.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 599.7999877929688,
        y: 320.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 621.7999877929688,
        y: 310.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 629.7999877929688,
        y: 304.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 639.7999877929688,
        y: 284.3999938964844
      },
      couleur: "#e9d186",
      auteur: "yy"
    },
    {
      position: {
        x: 663.7999877929688,
        y: 780.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 669.7999877929688,
        y: 760.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 671.7999877929688,
        y: 754.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 677.7999877929688,
        y: 724.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 683.7999877929688,
        y: 712.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 691.7999877929688,
        y: 678.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 705.7999877929688,
        y: 642.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 729.7999877929688,
        y: 576.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 719.7999877929688,
        y: 612.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 711.7999877929688,
        y: 632.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 735.7999877929688,
        y: 580.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 739.7999877929688,
        y: 570.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 741.7999877929688,
        y: 556.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 749.7999877929688,
        y: 542.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 765.7999877929688,
        y: 496.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 757.7999877929688,
        y: 516.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 773.7999877929688,
        y: 498.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 787.7999877929688,
        y: 528.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 801.7999877929688,
        y: 542.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 813.7999877929688,
        y: 580.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 823.7999877929688,
        y: 580.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 811.7999877929688,
        y: 556.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 813.7999877929688,
        y: 574.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 817.7999877929688,
        y: 586.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 825.7999877929688,
        y: 618.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 821.7999877929688,
        y: 592.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 831.7999877929688,
        y: 630.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 837.7999877929688,
        y: 666.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 831.7999877929688,
        y: 618.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 831.7999877929688,
        y: 638.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 831.7999877929688,
        y: 652.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 831.7999877929688,
        y: 672.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 833.7999877929688,
        y: 692.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 712.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 837.7999877929688,
        y: 740.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 837.7999877929688,
        y: 752.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 833.7999877929688,
        y: 718.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 833.7999877929688,
        y: 758.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 835.7999877929688,
        y: 774.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 705.7999877929688,
        y: 628.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 737.7999877929688,
        y: 634.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 783.7999877929688,
        y: 628.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 805.7999877929688,
        y: 630.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 713.7999877929688,
        y: 708.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 759.7999877929688,
        y: 708.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 721.7999877929688,
        y: 716.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 727.7999877929688,
        y: 712.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 747.7999877929688,
        y: 712.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 765.7999877929688,
        y: 712.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 789.7999877929688,
        y: 708.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    },
    {
      position: {
        x: 813.7999877929688,
        y: 708.3999938964844
      },
      couleur: "#4a4a4a",
      auteur: "yy"
    }
  ]
});
 
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

pixelBoard6.save((err) => {
  if (err) return handleError(err);
});
pixelBoard4.save((err) => {
  if (err) return handleError(err);
});
pixelBoard5.save((err) => {
  if (err) return handleError(err);
});

setTimeout(()=>{
  process.exit(0)
},5000)

 function convertDate(yourDate){
    const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
  }