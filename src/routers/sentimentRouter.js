var express = require('express');
var sentiment = require('sentiment');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            var result = sentiment(text);

            if (result.score > 0)
                result.sentiment = "Positive"
            else if (result.score < 0)
                result.sentiment = "Negative"
            else
                result.sentiment = "Neutral"

            res.send(result);
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;