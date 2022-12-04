// dependencies
const mongoose = require('mongoose');
// connect to database
mongoose.connect(`mongodb://${process.env.API_URL}/pixerart`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create Model
const Schema = mongoose.Schema;

const pixelBoard = new Schema({
  statut: {
    type:Boolean,
    required:true
  },
  dateCreation: {
    type:String,
    required:true
  },
  dateFin:{
    type:String,
    required:true
  },
  taille:{
    width:{
      type:Number,
      required:true
    },
    height:{
      type:Number,
      required:true
    },
  },
  auteur:{
    type:String,
    required:true
  },
  mode:String,
  delai:Number,
  titre:{
    type:String,
    required:true
  },
  pixels:[{
    position:{
            x:Number,
            y:Number
            },
            couleur:String,
            auteur:String
}]
});

module.exports = mongoose.model('pixelBoard', pixelBoard, 'pixelBoards');
