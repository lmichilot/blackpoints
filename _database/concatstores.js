'use strict';
var dotenv = require('dotenv');
dotenv.load()

class Util {

    setSchema(SP) {
        var packSP = 'CALL ' + process.env.DB_ID + '.' + SP;
        return packSP;
    }

}
module.exports = Util;