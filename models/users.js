var mongoose  = require("mongoose");


var usersSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String
 });

 var usersModel = mongoose.model('users', usersSchema);