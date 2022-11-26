// dependencies
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost/pixerart',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create Model
const Schema = mongoose.Schema;

const pixelBoard = new Schema({
  statut: Boolean,
  dateCreation: Date,
  dateFin:Date,
  taille:{width:Number,height:Number},
  auteur:String,
  mode:String,
  delai:Number,
  titre:String,
  pixels:{position:{
            x:Number,
            y:Number
            },
            couleur:String,
            auteur:String
}
});

module.exports = mongoose.model('pixelBoard', pixelBoard, 'pixelBoards');
