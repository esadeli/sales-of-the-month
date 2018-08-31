'use strict'

const Models = require('../models')
const User = Models.User
const HashPassword = require('../helpers/HashPassword');

class UserController {

    static insertUser(req,res,objCreate){
        let obj = objCreate
        console.log('TEST',obj)
        User.create({username : obj['username'], password : obj['password'] })
                .then(row =>{
                    res.redirect('register')
                })  
                .catch(err =>{
                    // res.send(err)
                    console.log(err);
                    res.redirect('register')
                })
                
    }

    static findOneUser(req,res){

        let obj = req.body;
        let hashPassword = HashPassword(obj['password'])
        // console.log(obj['password'],'=====',hashPassword)

        // res.send('OK')
        User.findOne({where : { username : obj['username'], password : hashPassword}})
                .then(row =>{
                    // console.log('TESTTT', row)
                    if (row) {
                         req.session.admin = {
                            name : req.body.username,
                            password : req.body.password
                        }
                        res.redirect('/products')
                        // console.log('TEST',req.session)
                    } else {
                        // send Error
                        res.redirect('/register')
                    }
                    // res.render(......)
                    // res.send(row)
                })  
                .catch(err =>{
                    console.log(err)
                    res.send(err)
                })
    }
}

module.exports = UserController