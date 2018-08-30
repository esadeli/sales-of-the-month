'use strict'

const express = require('express');
const router = express.Router();
const SalesProductController = require('../controllers/SalesProductController');

router.get('/products', SalesProductController.viewAddTransaction);
router.post('/transaction', SalesProductController.insertSalesProduct);

module.exports = router;