//external middleware
const bcrypt = require('bcrypt');

//internal middleware
const User = require("../../schema/userSchema");

const addDatabase =async (req,res,next)=>{
    let user ;
    //create a hash password 
    const hashPassword = await bcrypt.hash(req.body.password,Number(process.env.SALT));
    
    //check avatar is available 
    if(req.files[0]?.filename){
        user = await new User({
            ...req.body,
            password : hashPassword ,
            avatar : req.files[0].filename
        })
        console.log(req.files[0].filename);
    }
    else{
        user = await new User({
            ...req.body,
            password : hashPassword 
        })
    }
    
    try{
        await user.save();
        res.status(200).json({
            message : "Succesfully login"
        })
    }
    catch(err){
        res.status(500).json({
            errors : {
                common : {
                    msg : "database add error"
                }
            }
        })
    }
    
}

module.exports = addDatabase ;