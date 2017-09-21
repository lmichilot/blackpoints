const conn = require('../_database/connection');
const Util = require('../_database/concatstores');
var ut = new Util();

class FeatureModel {

    constructor() {
    }

    getAll(cb) {
        var sp = ut.setSchema('usp_getAll_Feature') + '()';
        console.log(sp);
        conn.query(sp, cb);
    }

}

module.exports = FeatureModel;