//internal middleware
const User = require("../../schema/userSchema");

const deleteHandle = async(req,res,next) =>{
    const user = await User.findOne({_id : req.body.id});
    
    console.log(user);
}

module.exports = deleteHandle ;