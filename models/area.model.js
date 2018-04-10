var connection = require('./connection');
var Promise = require('promise');

module.exports = {
    getAllCounty: function () {
        return new Promise(function (resolve, reject) {
            connection(function (db) {
                db.collection('counties').find({}, {'sort': {'properties.county_name': 1}}).toArray(function (err, listCounty) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(listCounty);    
                    }
                });
            })
        })
    }
}  