//external middleware
const jwt = require('jsonwebtoken');


function authHandle(req,res,next){
    try{
        const decode = jwt.verify(req.signedCookies[process.env.cookie_name],process.env.jwt_secret);
        if(decode.userObject.name){
            next();
        }
        else{
            res.redirect('/');
        }
    }
    catch{
        res.redirect('/');
    }
   
    
}

module.exports = authHandle ;