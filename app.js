'use strict'

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

const SalesRouters = require('./routers/SalesRouters');
const ProductRouters = require('./routers/ProductRouters');
const SalesProductRouters = require('./routers/SalesProductRouters');

const UserController = require('./controllers/UserController');
const IsLogin = require('./helpers/IsLogin');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('assets'));

app.use(session({
    secret : 'keyboard-cat', // bebas
    resave : false
}))

app.use('/sales',IsLogin,SalesRouters);
app.use('/products',IsLogin, ProductRouters);
app.use('/dashboard', SalesProductRouters);

app.get('/',(req,res)=>{
    //-------> siapkan index.ejs
    // res.send('OK')
    res.render('index');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    UserController.insertUser(req,res,req.body);

})

app.get('/login',(req,res)=>{
    res.render('testing-login');
})

app.post('/login',(req,res)=>{
    // console.log('TESTTTT', req.session)
    UserController.findOneUser(req, res)   
})

app.get('/logout',(req,res)=>{
    req.session.admin = null;
    res.redirect('/login');
})

app.listen(3000, ()=>{
    console.log('you are listening to Port 3000')
})

