'use strict'

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.get('/',(req,res)=>{

    //-------> siapkan view untuk list product
    // res.send('OK')
    ProductController.findAllProduct(req,res)
})

router.post('/',(req,res)=>{
    //--------> siapkan form di tempat list product untuk tambah data product
    res.send('ok')
})

router.get('/edit/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk edit data
    res.send('ok')
})

router.post('/edit/:id',(req,res)=>{
    //------------> siapkan form terpisah untuk edit data
    res.send('ok')
})

router.get('/delete/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk delete data
    res.send('ok')
})

module.exports = router;