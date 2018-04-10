var express = require('express');
var router = express.Router();
var AreaController = require('./../controllers/area.controller');

router.get('/get-all-county', AreaController.getAllCounty);
module.exports = router;