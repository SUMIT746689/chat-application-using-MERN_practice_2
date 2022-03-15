const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Chatschema = mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    participentId : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})

const Chat = new mongoose.model('Chat',Chatschema);

module.exports = Chat ;