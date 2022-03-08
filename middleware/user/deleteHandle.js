//internal middleware
const User = require("../../schema/userSchema");
const fs = require('fs');
const path = require('path');

const deleteHandle = async(req,res,next) =>{
    try{
        //Search user uning id
        const user = await User.findOne({_id : req.params.id});
       
        if(user.avatar){         
            //avatar Path
            const avatarPath = path.join(__dirname,'../../public/uploads/avatars',user.avatar);
            
            //remove avatar file
            fs.unlink(avatarPath,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        };
        //user field delete from database
        await User.deleteOne({_id : req.params.id});
        res.status(200).json({
            message : "Sucessfully Deleted" 
        })
    }
    catch(err){
        res.status(500).json({
            Error : err 
        })
    }
    
}

module.exports = deleteHandle ;