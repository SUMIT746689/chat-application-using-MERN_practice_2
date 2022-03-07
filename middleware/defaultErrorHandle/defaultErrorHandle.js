//external middleware
const createError = require('http-errors')

const defaultpath = (req,res,next)=>{
    next(createError(401,"Router path cannot found"))
}

const defaultErrorHandle = (err,req,res,next)=>{
    if(process.env.NODE_ENV === "development"){
        res.render('error',{
            error : err
        });
    }
    else{
        res.status(err.status).json({
            error : err.message
        });
    }
    
}

module.exports={
    defaultErrorHandle,
    defaultpath
}