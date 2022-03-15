const Chat = require("../../schema/chatSchema");

const chatSendDatabase =async (req,res,next) =>{
    console.log(res.locals.userObject.name);
    console.log(req.files[0] === undefined);
    if(req.files[0] === undefined && req.body.chatmessage===''){
       console.log('no files')
    }
    else if( req.files[0] === undefined ) {
        console.log(req.files[0].filename);
        const chat = await new Chat({
            userId : res.locals.userObject.name,
            participentId : req.body.participentId,
            message : req.body.chatmessage
        });
        await chat.save();
        console.log(chat)
    }
    else{
        const chat = await new Chat({
            userId : res.locals.userObject.name,
            participentId : req.body.participentId,
            message : req.body.chatmessage,
            avatar : req.files[0].filename
        })
        await chat.save();
        console.log(chat);
    }

}
module.exports = chatSendDatabase ;