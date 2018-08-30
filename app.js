'use strict'

const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const SalesRouters = require('./routers/SalesRouters');
const ProductRouters = require('./routers/ProductRouters');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/sales',SalesRouters);
app.use('/products',ProductRouters);


app.get('/',(req,res)=>{
    //-------> siapkan index.ejs
    res.send('OK')
})

app.listen(3000, ()=>{
    console.log('you are listening to Port 3000')
})
