'use strict'

const express = require('express');
const router = express.Router();

const SalesController = require('../controllers/SalesController')

router.get('/',(req,res)=>{
    SalesController.findAllSales(req,res);
    //-------> siapkan view untuk list salesman
    // res.send('OK')
})

router.post('/',(req,res)=>{
    //--------> siapkan form di tempat list salesman untuk tambah data sales
    // res.send(req.body)
    let obj = {
        salesName: req.body.salesName,
        email: req.body.email,
        birthday: req.body.birthday
    }
    SalesController.insertSales(req, res, obj);
})

router.get('/edit/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk edit data
    let id = parseInt(req.params.id);
    SalesController.findByIdSales(req, res, id);
    // res.send('ok');
})

router.post('/edit/:id',(req,res)=>{
    //------------> siapkan form terpisah untuk edit data
    let id = parseInt(req.params.id);
    let obj = {
        id: id,
        salesName: req.body.salesName,
        email: req.body.email
    };
    SalesController.updateSales(req, res, obj, id);
})

router.get('/delete/:id',(req,res)=>{
    //----------> siapkan form terpisah untuk delete data
    let id = parseInt(req.params.id);
    SalesController.deleteSales(req, res, id);
})

module.exports = router;