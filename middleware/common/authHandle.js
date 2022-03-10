
function authHandle(req,res,next){
    console.log('Signed Cookies',{...req.signedCookies});
    next();
}

module.exports = authHandle ;