var express = require('express');
var dbpedia = require('../services/dbpedia');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            if (!text) {
                res.send("Missing text parameter.");
            }
            dbpedia(text).then(output => res.send(output));
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;