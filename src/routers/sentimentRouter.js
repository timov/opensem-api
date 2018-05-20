var express = require('express');
var sentiment = require('../services/sentiment');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            var result = sentiment(text);
            res.send(result);
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;