var express = require('express');

var areas = require('./routes/area');
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/area', areas);

var server = app.listen(3004, "0.0.0.0", function () {
    console.log('Server is running on port', 3004);
});

module.exports = app;
