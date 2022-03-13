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
}
);

const Conversation = ('Conversation',convsersationSchema);

module.exports = Conversation ;