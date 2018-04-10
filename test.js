var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var url = 'mongodb://localhost:27017/terva';

MongoClient.connect(url, function(err, db) {
    var PARCEL = db.collection('parcel');
    var CLU = db.collection('clu_bed');
})
