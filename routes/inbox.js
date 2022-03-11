//external middleware
const express = require('express');

//internal middleware
const authHandle = require('../middleware/common/authHandle');
const setLocalsHandler = require('../middleware/common/setLocals');

const route = express.Router()


route.get('/',authHandle,setLocalsHandler("inbox"),(req,res,next)=>{
    res.render("inbox",{
        userObject : res.locals.userObject
    });
})

module.exports = route ;