const jwt = require('jsonwebtoken');

function setLocalsHandler (data) {
    return function (req,res,next){
        res.locals.name = data ;
        try{
            const decode = jwt.verify(req.signedCookies[process.env.cookie_name],process.env.jwt_secret)
            if(decode.userObject.name){
                res.locals.userObject = decode.userObject;
            }
            else{
                res.locals.userObject = null ;
            }
            next();
        }
        catch{
            next();
        }
        
       
    }
}

module.exports = setLocalsHandler ;