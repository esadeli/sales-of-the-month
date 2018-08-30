'use strict'

var Crypto = require("crypto");

function HashPassword(str) {
    const secret = 'salesofthemonth'

    const hash = Crypto
                    .createHmac('SHA256',secret)
                    .update(str)
                    .digest('hex');

    return hash;                
}

module.exports = HashPassword

console.log(HashPassword('Makan'))