
function setLocalsHandler (data) {
    return function (req,res,next){
        res.locals.user = data;
        next();
    }
}

module.exports = setLocalsHandler ;