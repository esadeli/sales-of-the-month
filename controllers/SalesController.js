'use strict'

const Models = require('../models');
const Sales = Models.Sales

class SalesController {

    static insertSales(req,res,objCreate){
        let obj = objCreate
        Sales.insert({salesName : obj['salesName'], birthday : obj['birthday'],
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

        Sales.update({salesName : obj['salesName'], birthday : obj['birthday'], 
                    email : obj['email'], updatedAt = new Date()},{where : {id : inputChangeId}})

                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })

    }

    static deleteSales(req,res,deleteId){
        let inputDeleteId = deleteId;
        Sales.destroy({where : {id : inputDeleteId}})
            .then(row =>{
                // res.redirect(......)
            })  
            .catch(err =>{
                // res.send(err)
            })
    }

    static findAllSales(req,res){
        Sales.findAll({
            order : ['id','DESC']})
            .then(rows =>{
                // res.render(......)
            })  
            .catch(err =>{
                // res.send(err)
            })
    }

    static findByIdSales(req,res,searchId){

        let inputSearchId = searchId;

        Sales.findById(inputSearchId)
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.send(err)
                })
    }

}

module.exports = SalesController