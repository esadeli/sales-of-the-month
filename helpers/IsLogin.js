'use strict'

const UserController = require('../controllers/UserController')

function IsLogin(req,res,next) {
    console.log(req.res.admin)
    if (req.session.admin) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = IsLogin