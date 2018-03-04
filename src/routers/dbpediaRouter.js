var express = require('express');
var mlspotlight = require('dbpedia-spotlight');

var routes = function () {
    var router = express.Router();

    // fix dbpedia-spotlight to english language
    mlspotlight.fixToEndpoint('english');

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            mlspotlight.annotate(text, function (output) {
                res.send(output);
            });
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;