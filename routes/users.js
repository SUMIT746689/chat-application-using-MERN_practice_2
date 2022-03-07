//external middleware
const express = require('express');
const setLocalsHandler = require('../middleware/common/setLocals');
const {avatarHandle} = require('../middleware/user/avatarHandle');
const { validateCheck, validateResult } = require('../middleware/user/validatorHandle');

//internal middleware

const route = express.Router()


route.get('/',setLocalsHandler("control"),(req,res,next)=>{
    console.log(res.locals.user);
    res.render("users");
});

route.post('/',avatarHandle,validateCheck,validateResult)

module.exports = route ;