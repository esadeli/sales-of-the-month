'use strict'

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/', (req, res) => {
    ProductController.findAllProduct(req,res);
})

router.post('/',(req,res)=>{
    //--------> siapkan form di tempat list product untuk tambah data product
    // res.send('ok')
    // res.send(req.body);
    ProductController.insertProduct(req, res, {
        productName: req.body.productName,
        price: req.body.price
    });
})

router.get('/edit/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk edit data
    let id = req.params.id;
    ProductController.findByIdProduct(req, res, id);
})

router.post('/edit/:id',(req,res)=>{
    //------------> siapkan form terpisah untuk edit data
    // res.send([req.params.id, req.body]);
    let obj = {
        productName: req.body.productName,
        price: req.body.price
    }
    ProductController.updateProduct(req, res, obj, parseInt(req.params.id));
})

router.get('/delete/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk delete data
    let id = parseInt(req.params.id);
    ProductController.deleteProduct(req, res, id);
    // res.send();
})

module.exports = router;