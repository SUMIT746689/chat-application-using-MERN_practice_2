//external middleware
const { Router } = require('express');
const express = require('express');

//internal middleware
const route = express.Router();
const setLocalsHandler = require('../middleware/common/setLocals');
const addDatabase = require('../middleware/user/addDatabase');
const {avatarHandle} = require('../middleware/user/avatarHandle');
const deleteHandle = require('../middleware/user/deleteHandle');
const { validateCheck, validateResult } = require('../middleware/user/validatorHandle');
const User = require('../schema/userSchema');
const authHandle = require('../middleware/common/authHandle');


route.get('/',authHandle,setLocalsHandler("users"),setLocalsHandler("control"),authHandle, async (req,res,next)=>{
    console.log(res.locals.user);
    const users = await User.find();
    res.render("users",{
        userObject : res.locals.userObject,
        users
    });
}); 

route.post('/',avatarHandle,validateCheck,validateResult,addDatabase);

route.delete('/:id',deleteHandle);

module.exports = route ;