'use strict'

const Models = require('../models')
const User = Models.User
const HashPassword = require('../helpers/HashPassword');

class UserController {

    static insertUser(req,res,objCreate){
        let obj = objCreate
        User.create({username : obj['username'], password : obj['password'] })
                .then(row =>{
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.render(err)
                })
                
    }

    static findOneUser(req,res,searchParam){

        let obj = searchParam;
        let hashPassword = HashPassword(obj['password'])

        User.findOne({where : { username : obj['username'], password : hashPassword}})
                .then(row =>{
                    if (row) {
                         req.session.admin = {
                            name : req.body.username,
                            password : req.body.password
                        }
                        res.redirect('/dashboard')
                    } else {
                        // send Error
                    }
                    // res.render(......)
                })  
                .catch(err =>{
                    // res.send(err)
                })
    }
}

module.exports = UserController