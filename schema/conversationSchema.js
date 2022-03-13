const timespan = require('jsonwebtoken/lib/timespan');
const mongoose = require('mongoose');

const convsersationSchema = mongoose.Schema({
    creatorId : {
        type : String,
        required : true,
    },
    perticipantId : {
        type : String,
        required : true
    }
},
    {timestamps : true}
);

const Conversation = mongoose.model('Conversation',convsersationSchema);

module.exports = Conversation ;