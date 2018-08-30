'use strict'

const Models = require('../models');
const Salesman = Models.Salesman;
const SalesProduct = Models.SalesProduct;

class SalesController {

    static insertSales(req,res,objCreate){
        let obj = objCreate
        Salesman.create({salesName : obj['salesName'], birthday : obj['birthday'],
                       email : obj['email']  })
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })
                
    }

    static updateSales(req,res,objUpdate,changeId){        
        let inputChangeId = changeId;
        let obj = objUpdate;

        Salesman.update({salesName : obj['salesName'], birthday : obj['birthday'], 
                    email : obj['email'], updatedAt : new Date()},{where : {id : inputChangeId}})

                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })

    }

    static deleteSales(req,res,deleteId){
        let inputDeleteId = deleteId;

        SalesProduct.destroy({where : {salesId : inputDeleteId}})
            .then(row =>{
                Salesman.destroy({where : {id : inputDeleteId}})
                .then(row =>{
                    // res.redirect(......)
                })  
            })
            .catch(err =>{
                    // res.send(err)
            })
    }

    static findAllSales(req,res){
        Salesman.findAll( { order : [['id','DESC']]})
            .then(rows =>{
                // res.render(......)
                // console.log(rows)
                res.send(rows)
            })  
            .catch(err =>{
                // res.send(err)
            })
    }

    static findByIdSales(req,res,searchId){

        let inputSearchId = searchId;

        Salesman.findById(inputSearchId)
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.send(err)
                })
    }

}

console.log(SalesController.findAllSales())

module.exports = SalesController