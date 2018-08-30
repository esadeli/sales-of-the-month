'use strict'

const Models = require('../models');
const Salesman = Models.Salesman
const Product = Models.Product;
const SalesProduct = Models.SalesProduct;
const dateFormat = require('../helpers/dateFormat');

class SalesProductController {
    
    static insertSalesProduct(req,res,objCreate){
        let obj = objCreate
    static viewSalesOfTheMonth(req, res) {
        SalesProduct.findAll()
        .then(results => {
            results.forEach(element => {
                
            });
        })
        .catch(err => {
            res.send(err);
        });
        
        // res.render('sales-of-the-month', {dateFormat});
    }

    static viewAddTransaction(req, res) {
        Product.findAll()
        .then(products => {
            // res.send(products);
            // console.log(Sales, '<==== DATA SALES');
            Salesman.findAll()
            .then(salesData => {
                // res.send(SalesProduct);
                SalesProduct.findAll({
                    include: [Product, Salesman]
                })
                .then(salesProducts => {
                    // res.send(salesProducts);
                    res.render('dashboard', {products, sales: salesData, salesProducts});
                })
                .catch(err => {
                    res.render('error', {error: err});
                })
            })
            .catch(err => {
                res.render('error', {error: err});
            });
        })
        .catch(err => {
            res.render('error', {error: err});
        });
    }

    static insertSalesProduct(req,res){

        let productData = req.body.productData.split('|');
        let productId = parseInt(productData[0]);
        let productPrice = parseInt(productData[1]);
        let quantity = parseInt(req.body.quantity);

        let obj = {
          productId: productId,
          salesId: parseInt(req.body.salesId),
          quantity: quantity,
          amount: productPrice * quantity
        };
        SalesProduct.create({salesId : obj['salesId'], productId : obj['productId'] ,
                            quantity : obj['quantity'] , amount : obj['amount']})
                .then(row =>{
                    res.redirect('/dashboard/products');
                })  
                .catch(err =>{
                    // res.render(err)
                    res.render('error', {error: err});
                });
                
    }

    static deleteSalesProduct(req,res,deleteParameter){
        let obj = deleteParameter;
        SalesProduct.destroy({where : {[obj['parameter']] : obj['value']}})
            .then(row =>{
                // res.redirect(......)
            })  
            .catch(err =>{
                // res.send(err)
            })
    }

    static findAllSalesProduct(req,res){
        SalesProduct.findAll({
            order : ['id','DESC']})
            .then(rows =>{
                // res.render(......)
            })  
            .catch(err =>{
                // res.send(err)
            })
    }


}

module.exports = SalesProductController;