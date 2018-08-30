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

app.use('/sales',SalesRouters);
app.use('/products',ProductRouters);
app.use('/dashboard', SalesProductRouters);

app.use('/sales', IsLogin, SalesRouters);
app.use('/products',IsLogin,ProductRouters);

app.use(session({
    secret : 'keyboard-cat', // bebas
    resave : false
}))

app.get('/',(req,res)=>{
    //-------> siapkan index.ejs
    // res.send('OK')
    res.render('index');
})

app.get('/register',(req,res)=>{
    UserController.insertUser(req,res,req.body['username'],req.body['password'])
})

app.get('/login',(req,res)=>{
    // UserController.findOneUser(req,res,req.body['username'],req.body['password'])
    res.render('testing-login');
})

app.post('/login',(req,res)=>{
    UserController.findOneUser(req, res)
   
    // res.redirect('/dashboard')
    //res.send(req.session.admin)
})

app.get('/dashboard',isLogin,(req,res,next)=>{
    res.send(`aman`);
})

app.listen(3000, ()=>{
    console.log('you are listening to Port 3000')
})

// function isLogin(req,res,next) {
//     console.log(req.session.admin)
//     // const isLogin = false;
//     const user = 'DADADA'
//     const password = 'test'
//     const role = 'admin'
//     if(req.session.admin.admin.name === user && req.session.admin.password ===password){
//         next()
//     }else{
//         next(`error`)
//     }
// }