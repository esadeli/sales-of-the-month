'use strict'

const Models = require('../models');
const Salesman = Models.Salesman;
const SalesProduct = Models.SalesProduct;

class SalesController {

    static insertSales(req,res,objCreate){

        let obj = objCreate;
        Salesman.create({salesName : obj['salesName'], birthday : obj['birthday'],
                       email : obj['email']  })
                .then(row =>{
                    res.redirect('/sales');
                })  
                .catch(err =>{
                    // res.send(`ERROR ${err}`);
                    // res.send(err);
                    res.render('errors', {errors: err.errors});
                })
                
    }

    static updateSales(req,res,objUpdate,changeId){        
        let inputChangeId = changeId;
        let obj = objUpdate;

        Salesman.update({salesName : obj['salesName'], birthday : obj['birthday'], 
                    email : obj['email'], updatedAt : new Date()},{where : {id : inputChangeId}})

                .then(row =>{
                    res.redirect('/sales');
                })  
                .catch(err =>{
                    res.render('errors', {errors: err.errors});
                })

    }

    static deleteSales(req,res,deleteId){
        let inputDeleteId = deleteId;

        SalesProduct.destroy({where : {salesId : inputDeleteId}})
            .then(row =>{
                Salesman.destroy({where : {id : inputDeleteId}})
                .then(row =>{
                    // res.redirect(......)
                    res.redirect('/sales');
                })  
            })
            .catch(err =>{
                res.render('error', {error: err});
            })
    }

    static findAllSales(req,res){
        console.log('MASUkkkkk')
        Salesman.findAll( { order : [['id','DESC']]})
            .then(rows =>{
                res.render('sales-data', {salesData: rows});
                // console.log(rows)
                // res.send(rows)
            })  
            .catch(err =>{
                res.render('error', {error: err});
            })
    }

    static findByIdSales(req,res,searchId){

        let inputSearchId = searchId;

        console.log(inputSearchId, '<====================');

        Salesman.findById(inputSearchId)
                .then(row =>{
                    res.render('sales-edit', {sales: row});
                })  
                .catch(err =>{
                    res.render('error', {error: err});
                })
    }

}

// console.log(SalesController.findAllSales())

module.exports = SalesController