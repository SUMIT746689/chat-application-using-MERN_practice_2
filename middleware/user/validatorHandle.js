//external middleware
const {check,validationResult} = require('express-validator');
const createError = require('http-errors'); 
const path = require('path');
const {unlink} = require('fs');

//internal middleware
const User = require('../../schema/userSchema');


const validateCheck = [
    check('name')
        .isLowercase()
        .withMessage("Name must be in lowercse")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Insert a correct email address")
        .toLowerCase()
        .custom(async (value)=>{
           const user = await User.findOne({email : value});
            if(user){
                throw createError("Email already used")
            }
        }),
    check("mobile")
        .isMobilePhone(["bn-BD"])
        .withMessage("Input a correct bangladeshi number"),
    check("password")
        .isStrongPassword()
        .withMessage("Password must be at least 8 value and minimum one small letter,one capital and one number")
    
];

const validateResult = async (req,res,next)=>{
    const response = validationResult(req);
    if(response){
        if(req.files[0]?.filename){
            const avatarPath = path.join(__dirname,'../../public/uploads/avatars',req.files[0].filename);
            unlink(avatarPath,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
        const responseMap = response.mapped();
        res.status(405).json({
            errors : responseMap 
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