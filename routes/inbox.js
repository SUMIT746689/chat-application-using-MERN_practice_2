//external middleware
const express = require('express');

//internal middleware
const authHandle = require('../middleware/common/authHandle');
const setLocalsHandler = require('../middleware/common/setLocals');
const chatHandle = require('../middleware/inbox/chatHandle');
const chatSendDatabase = require('../middleware/inbox/chatSendDatabase');
const createConversation = require('../middleware/inbox/createConversation');
const searchUser = require('../middleware/inbox/searchUser');
const sendMessage = require('../middleware/inbox/sendMessage');
const Conversation = require('../schema/conversationSchema');
const User = require('../schema/userSchema');

const route = express.Router()


route.get('/',authHandle,setLocalsHandler("inbox"),async (req,res,next)=>{
    const userId =await  User.findOne({email : res.locals.userObject.email});

    const conversation = await Conversation.find({
        creatorId : userId._id
    })
    res.locals.conversation = [...conversation]
    console.log(conversation)
    res.render("inbox");
})



route.post('/chat',authHandle,setLocalsHandler("inbox"),chatHandle);

route.post('/chat/sendMessage',authHandle,sendMessage,chatSendDatabase);

route.post('/newConversion/:userId/:perticipentId',authHandle,setLocalsHandler("inbox"),createConversation); 

route.post('/:id',authHandle,setLocalsHandler("inbox"),searchUser);

module.exports = route ;