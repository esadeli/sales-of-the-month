'use strict'

const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const SalesRouters = require('./routers/SalesRouters');
const ProductRouters = require('./routers/ProductRouters');
const UserController = require('./controllers/UserController');


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/sales',SalesRouters);
app.use('/products',ProductRouters);


app.get('/',(req,res)=>{
    //-------> siapkan index.ejs
    res.send('OK')
})

app.get('/register',(req,res)=>{
    UserController.insertUser(req,res,req.body['username'],req.body['password'])
})

app.get('/login',(req,res)=>{
    UserController.findOneUser(req,res,req.body['username'],req.body['password'])
})

app.listen(3000, ()=>{
    console.log('you are listening to Port 3000')
})
