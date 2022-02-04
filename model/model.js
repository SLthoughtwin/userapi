const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name : String,
   lastname : String,
   email : String,
   phone : Number,
   password : String,
   cpassword : String
  
})

const User = new mongoose.model('User',userSchema);

module.exports = User;