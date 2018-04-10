var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

const url = 'mongodb://localhost:27017/terva';
var connection;

module.exports = function (callback) {
    if (connection) {
        callback(connection);
    } else {
        console.log(url);
        MongoClient.connect(url, function(err, db) {
            console.log("Connect database");
            connection = db;
            var parcel = db.collection('parcel');
            callback(db);
        })
    }
}