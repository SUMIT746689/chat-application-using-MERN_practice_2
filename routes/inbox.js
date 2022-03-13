//external middleware
const express = require('express');

//internal middleware
const authHandle = require('../middleware/common/authHandle');
const setLocalsHandler = require('../middleware/common/setLocals');
const searchUser = require('../middleware/inbox/searchUser');

const route = express.Router()


route.get('/',authHandle,setLocalsHandler("inbox"),(req,res,next)=>{
    res.render("inbox");
})

route.post('/:id',authHandle,setLocalsHandler("inbox"),searchUser); 

module.exports = route ;