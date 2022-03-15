const chatSendDatabase = (req,res,next) =>{
    
    if(req.files[0] === undefined && req.body.chatmessage===''){
       console.log('no files')
    }
    else if( req.files[0] !== undefined ) {
        console.log(req.files[0].filename);
        
    }

}
module.exports = chatSendDatabase ;