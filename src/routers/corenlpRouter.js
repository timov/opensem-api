var express = require('express');
var corenlp = require('../services/corenlp');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            corenlp(text).then(result => res.send(result));
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;
