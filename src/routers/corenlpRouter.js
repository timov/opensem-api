var express = require('express');
var CoreNLP = require('corenlp');
var Properties = CoreNLP.Properties;
var Pipeline = CoreNLP.Pipeline;

var routes = function () {
    var router = express.Router();

    const props = new Properties({
        annotators: 'tokenize,ssplit,pos,ner,parse',
    });

    const pipeline = new Pipeline(props, 'English'); // uses ConnectorServer by default

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            const sent = new CoreNLP.default.simple.Sentence(text);

            pipeline.annotate(sent)
                .then(sent => {
                    console.log('parse', sent.parse());
                    res.send(CoreNLP.default.util.Tree.fromSentence(sent).dump());
                })
                .catch(err => {
                    console.log('err', err);
                    res.send(err);
                });
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;
};

module.exports = routes;
