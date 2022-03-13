const Conversation = require("../../schema/conversationSchema");
const User = require("../../schema/userSchema");

const createConversation =async (req,res,next) =>{
    console.log(req.params);
    
    try{
        const conversation = await new Conversation({
            creatorId : req.params.userId,
            perticipantId : req.params.perticipentId
        })
        await conversation.save();
        res.end();

    }
    catch(err){
        console.log(err);
        res.end();
    }
}

module.exports = createConversation ;