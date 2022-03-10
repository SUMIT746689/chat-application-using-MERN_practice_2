//external middleware
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const createError = require('http-errors');

//Internal middleware
const User = require('../../schema/userSchema');

async function loginHandle (req,res,next){
    let isCorrectPassword = false ;
    let jwtToken = false ;
try{ 
    //searching user in database
    const user = await User.findOne({
        $or : [{name : req.body.username},{email : req.body.username}]
        });
    if(req.body.password){
        //caompare password is correct or not with hashPassword
        isCorrectPassword = await bcrypt.compare(req.body.password,user.password);
    }
    else{
        throw createError("required password")
    }
    const userObject  = {
            name : user.name,
            mobile : user.mobile,
            email : user.email,
            role : "user"
    }
    console.log(isCorrectPassword);
    if(isCorrectPassword){
        //create a json web token
        jwtToken = jwt.sign({
            userObject
            },
            process.env.jwt_secret,
            {expiresIn : process.env.jwt_expire_time })
    }
    else{
        throw createError("password is not correct")
    }
    
    if(jwtToken){
        res.cookie(process.env.cookie_name,
            jwtToken,
            {   
                maxAge : process.env.jwt_expire_time,
                signed : true,
                httpOnly : true 
            });
        //response set a user info object
        res.locals.userInfo = userObject ;
        //after success redirect in inbox page
        res.render('inbox');
    }
    else{
        throw createError("Jwt Token is not created ")
    }
    }
    catch(err){
        res.render(
            'index',{
            data :{
               username :  req.body.username
            },
            errors : {
                common : {
                    msg : "Required correct username and password"
                }
            }
            
        })
    }
}


module.exports = loginHandle ;