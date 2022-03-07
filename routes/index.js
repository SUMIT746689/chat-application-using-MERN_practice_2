//external middleware
const express = require('express');

//internal middleware

const route = express.Router()


route.get('/',(req,res,next)=>{
    res.render("index");
})

module.exports = route ;