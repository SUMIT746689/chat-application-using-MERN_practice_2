//external middleware
const mongoose = require('mongoose');

//create a schema
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    mobile : {
        type : String,
        required : true,
    },
    password : { 
        type : String,
        required : true
    },
    avatar : {
        type : String
    },
})

//create a user model
const User = mongoose.model('User',userSchema);

module.exports = User ;