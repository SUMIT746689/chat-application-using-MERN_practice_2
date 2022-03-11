//external middleware
const express = require('express');

//internal middleware
const loginHandle = require('../middleware/login/loginHandle');
const logOut = require('../middleware/login/logoutHandle');
const { validateCheck, validateResult } = require('../middleware/login/validateHandle');
const authHandle = require('../middleware/common/authHandle');
const setLocalsHandler = require('../middleware/common/setLocals');

const route = express.Router()


route.get('/',setLocalsHandler("index"),(req,res,next)=>{
    console.log(res.locals.userObject);
    res.render("index",{
        userObject : res.locals.userObject,
        data : '',
        errors : ''
    });
})

route.post('/',validateCheck,validateResult,loginHandle);

route.delete('/',logOut);

module.exports = route ;