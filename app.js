//External middleware
const express = require('express');
const mongoose = require('mongoose');

//internal middleware
const { defaultpath, defaultErrorHandle } = require('./middleware/defaultErrorHandle/defaultErrorHandle');
const login = require('./routes/index');
const inbox = require('./routes/inbox');
const users = require('./routes/users');

//create a application
const app = express();

//add application dotenv file access permission  
require('dotenv').config();

//connect with mongodb server
mongoose.connect(process.env.mongoose_database_url)
    .then(()=>{console.log("Database connection Successull...")})
    .catch(()=>{console.log(err)});

//types of data can get
app.use(express.json());
app.use(express.static('./public',{
    index : false
}));

//set a file accept engine
app.set("view engine","ejs");

//application routes
app.use('/',login);
app.use('/users',users);
app.use('/inbox',inbox);

//default route 
app.use(defaultpath);

//default err handler 
app.use(defaultErrorHandle);

//application running post set
app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT} ...`)
})