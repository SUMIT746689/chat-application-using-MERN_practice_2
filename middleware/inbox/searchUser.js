const User = require("../../schema/userSchema");


async function searchUser (req,res,next){
    console.log(req.params.id);
    const param =req.params.id ;
    
    const findUser =await User.find({
        $or : [
            {'name':param},
            {'email' : param},
        ]
    })
    res.json({"data": findUser});
}

module.exports = searchUser ;
