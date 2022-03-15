const Chat = require("../../schema/chatSchema");


const chatHandle =async ( req,res,next) =>{
    let data = req.body.perticipentId;
    console.log(data);
    try{
        const chat =await Chat.find({
            $and: [
                {userId : res.locals.userObject.name},
                {participentId : data}
            ]
        })
        res.locals.chat =  [...chat] ;
        
        console.log(chat);
        res.status(200).json({
            chat : [...chat]
        });
    }
    catch(err){
        res.status(400).json({
            error:{
                msg : err
            }
        });
    }
}

module.exports = chatHandle ;