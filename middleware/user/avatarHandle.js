const singleUpload = require("../../utilities/singleUpload");


function avatarHandle (req,res,next){
    const uplaod = singleUpload(
        "avatars",
        1000000,
        ["image/jpg","image/jpeg","image/png"],
        "only .jpeg, .jpg and .png file can uploaded"
    )
    //file upload 
    uplaod.any()(req,res,(err)=>{
        if(err){
            res.status(405).json({
                errors : {
                    avatar : {
                        msg : err.message
                    }
                }
            })
        }
        else{
            next();
        }
    })
}
module.exports = {
    avatarHandle
} ;