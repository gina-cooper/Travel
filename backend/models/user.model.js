const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

//define mongoose schema one field - username

const userSchema = new Schema({
    username: {type: String,  required:true, unique:true},
 }, {
     timestamps:true,
    
});

const User = mongoose.model('User', userSchema); //Mongoose model
module.exports = User; //export the mongoose model