'use strict'

const express = require('express');
const router = express.Router();
const SalesProductController = require('../controllers/SalesProductController');

router.get('/products', SalesProductController.viewAddTransaction);
router.get('/sales-of-the-month', SalesProductController.viewSalesOfTheMonth);
router.post('/transaction', SalesProductController.insertSalesProduct);

module.exports = router;