//external middleware
const express = require('express');

//internal middleware
const loginHandle = require('../middleware/login/loginHandle');
const logOut = require('../middleware/login/logoutHandle');
const { validateCheck, validateResult } = require('../middleware/login/validateHandle');
const route = express.Router()


route.get('/',(req,res,next)=>{
    res.render("index",{
        data : '',
        errors : ''
    });
})

route.post('/',validateCheck,validateResult,loginHandle);

route.delete('/',logOut);

module.exports = route ;