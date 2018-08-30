'use strict'

const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

    //-------> siapkan view untuk list salesman
    res.send('OK')
})

router.post('/',(req,res)=>{
    //--------> siapkan form di tempat list salesman untuk tambah data sales
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