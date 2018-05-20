var express = require('express');
var wordnet = require('../services/wordnet');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            wordnet(text).then(result => res.send(result));
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
}

module.exports = routes;