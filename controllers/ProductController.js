'use strict'

const Models = require('../models');
const Product = Models.Product;
const SalesProduct = Models.SalesProduct;

class ProductController{

        static insertProduct(req,res,objCreate){
            let obj = objCreate
            Product.create({productName : obj['productName'], price : obj['price'] })
                    .then(row =>{
                        // res.render(......)
                        res.redirect('/products');
                    })  
                    .catch(err =>{
                        // res.render(err)
                        res.render('error', {error: err});
                    })
                    
        }

        static updateProduct(req,res,objUpdate,changeId){        
            let inputChangeId = changeId;
            let obj = objUpdate;

            Product.update({productName : obj['productName'], price : obj['price']}
                                ,{where : {id : inputChangeId}})

                    .then(row =>{
                        res.redirect('/products');
                    })  
                    .catch(err =>{
                        res.render('error', {error: err});
                    })

        }

        static deleteProduct(req,res,deleteId){
            let inputDeleteId = deleteId;

            SalesProduct.destroy( { where : {productId : inputDeleteId}})
                .then(row =>{
                    Product.destroy({where : {id : inputDeleteId}})
                        .then(row =>{
                            // res.redirect(......)
                            res.redirect('/products');
                        })
                })
                .catch(err =>{
                    // res.send(err)
                    res.render('error', {error: err});
                })
        }

        static findAllProduct(req,res){
            Product.findAll({order : [['id','DESC']]})
                .then(rows =>{
                    // res.render(......)
                    // res.send(rows)
                    res.render('products-data', {rows});
                })  
                .catch(err =>{
                    res.send(err)
                })
        }

        static findByIdProduct(req,res,searchId){
            let inputSearchId = searchId;

            Product.findById(inputSearchId)
                    .then(row =>{
                        res.render('products-edit', {product: row});
                        // res.send(row);
                    })  
                    .catch(err =>{
                        // res.send(err)
                    })
        }
}

// console.log(ProductController.findAllProduct())

module.exports = ProductController