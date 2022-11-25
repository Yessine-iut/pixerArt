// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// connect to database
mongoose.connect('mongodb://localhost/pixerart',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create Model
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  role:String,
  theme:String
});
// Export Model
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User, 'userData');
