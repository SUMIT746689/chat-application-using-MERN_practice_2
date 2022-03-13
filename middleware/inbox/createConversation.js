const Conversation = require("../../schema/conversationSchema");
const User = require("../../schema/userSchema");

const createConversation =async (req,res,next) =>{
    console.log(req.params);
    
    try{
        const finduserId = await User.findOne({
            $or : [
                { name   : req.params.userId },
                { email  : req.params.userId },
                { mobile : req.params.userId }
            ]
        })
        const perticipentId = await User.findOne({
            $or : [
                { name   : req.params.perticipentId },
                { email  : req.params.perticipentId },
                { mobile : req.params.perticipentId }
            ]
        })
        const conversation = await new Conversation({
            creatorId : finduserId._id,
            perticipantId : perticipentId._id
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