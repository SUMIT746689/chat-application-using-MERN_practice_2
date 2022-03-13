//external middleware
const express = require('express');

//internal middleware
const authHandle = require('../middleware/common/authHandle');
const setLocalsHandler = require('../middleware/common/setLocals');
const createConversation = require('../middleware/inbox/createConversation');
const searchUser = require('../middleware/inbox/searchUser');

const route = express.Router()


route.get('/',authHandle,setLocalsHandler("inbox"),(req,res,next)=>{
    res.render("inbox");
})

route.post('/newConversion/:userId/:perticipentId',authHandle,setLocalsHandler("inbox"),createConversation); 

route.post('/:id',authHandle,setLocalsHandler("inbox"),searchUser);

module.exports = route ;