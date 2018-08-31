'use strict'

var Crypto = require("crypto");

function HashPassword(str) {
    const secret = 'salesofthemonth'

    const hash = Crypto
                    .createHmac('sha256',secret)
                    .update(str)
                    .digest('hex');

    return hash;                
}

module.exports = HashPassword