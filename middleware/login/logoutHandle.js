//external middleware


function logOut(req,res,next){
    res.clearCookie(process.env.cookie_name);
}

module.exports = logOut ;