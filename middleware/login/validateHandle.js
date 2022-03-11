//External Middlewware
const {check,validationResult} = require('express-validator');

//A middleware fo handle validation check for every 
const validateCheck = [
    check('username')
        .isEmail()
        .withMessage('required correct email'),
    check('password')
        .isLength(1)
        .withMessage('required password')
]

//A middleware for handle validation errors 
async function validateResult (req,res,next){
    const errorsResponse = validationResult(req);
    const errorsResponseMapped = errorsResponse.mapped();
    
    if(Object.keys(errorsResponseMapped).length > 0){
        res.render('index',{
            userObject : res.locals.userObject,
            data : {
                username :  req.body.username
            },
            errors : {
                ...errorsResponseMapped
            }
        })
    }
    else{
        next();
    }
}

module.exports = {
    validateCheck,
    validateResult
}