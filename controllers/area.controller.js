var Area = require('./../models/area.model');

module.exports = {
    getAllCounty: function (req, res) {
        Area.getAllCounty().then(function (data) {
            res.json(data);
        })
    }
}