var express = require('express');
var sentiment = require('../services/sentiment');
var dbpedia = require('../services/dbpedia');
var wordnet = require('../services/wordnet');
var corenlp = require('../services/corenlp');

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(async function (req, res) {
            var text = req.body.text;

            var sentimentResult = sentiment(text);
            var dbpediaResult = await dbpedia(text);
            var wordnetResult = await wordnet(text);
            var corenlpResult = await corenlp(text);

            var result = {
                sentimentResult: sentimentResult,
                dbpediaResult: dbpediaResult,
                wordnetResult: wordnetResult,
                corenlpResult: corenlpResult
            }

            res.send(result);
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;