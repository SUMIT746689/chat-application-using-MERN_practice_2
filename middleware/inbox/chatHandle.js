const Chat = require("../../schema/chatSchema");

const chatHandle =async ( req,res,next) =>{
    let data = req.body.perticipentId;
    const chat =await Chat.find({
        perticipantId : data
    })
    console.log(chat);
    res.end();
}

module.exports = chatHandle ;