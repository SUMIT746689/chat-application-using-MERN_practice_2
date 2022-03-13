const User = require("../../schema/userSchema");


async function searchUser (req,res,next){
    console.log(req.params.id);
    const param = req.params.id ;
    

    await User.find({
        $or : [
            {'name': param},
            {'email' : param},
            {'mobile' : param }
        ]
    })
    .then((findUser)=>{
        res.status(200).json({findUser});
    })
    .catch((err)=>{
        res.status(401).json({error:err});
    })
        
}

module.exports = searchUser ;
