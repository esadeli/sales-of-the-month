'use strict'

const Models = require('../models')
const SalesProduct = Models.SalesProduct

class SalesProductController {
    
    static insertSalesProduct(req,res,objCreate){
        let obj = objCreate
        SalesProduct.create({salesId : obj['salesId'], productId : obj['productId'] ,
                            quantity : obj['quantity'] , amount : obj['amount']})
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })
                
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

module.exports = SalesProductController