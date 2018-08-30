'use strict'

const Models = require('../models');
const Product = Models.Product

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
                        // res.render(......)
                    })  
                    .catch(err =>{
                        // res.render(err)
                    })

        }

        // static deleteProduct(req,res,deleteId){
        //     let inputDeleteId = deleteId;
        //     Product.destroy({where : {id : inputDeleteId}})
        //         .then(row =>{
        //             // res.redirect(......)
        //         })  
        //         .catch(err =>{
        //             // res.send(err)
        //         })
        // }

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

        // static findByIdProduct(req,res,searchId){
        //     name
        //     let inputSearchId = searchId;

        //     Product.findById(inputSearchId)
        //             .then(row =>{
        //                 // res.render(......)
        //             })  
        //             .catch(err =>{
        //                 // res.send(err)
        //             })
        // }
}

// console.log(ProductController.findAllProduct())

module.exports = ProductController