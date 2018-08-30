'use strict'

const Models = require('../models')
const User = Models.User

class UserController {

    static insertUser(req,res,objCreate){
        let obj = objCreate
        User.insert({username : obj['username'], password : obj['password'] })
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })
                
    }

    static findOneUser(req,res,searchParam){

        let obj = searchParam;

        User.findOne({where : { username : searchParam['username'], password : searchParam['password']}})
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.send(err)
                })
    }
}

module.exports = UserController