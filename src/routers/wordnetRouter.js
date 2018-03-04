var express = require('express');
var wordnet = require('wordnet');

var pointerTypes = {
    '!': 'Antonym',
    '@': 'Hypernym',
    '@i': 'Instance Hypernym',
    '~': 'Hyponym',
    '~i': 'Instance Hyponym',
    '#m': 'Member holonym',
    '#s': 'Substance holonym',
    '#p': 'Part holonym',
    '%m': 'Member meronym',
    '%s': 'Substance meronym',
    '%p': 'Part meronym',
    '=': 'Attribute',
    '+': 'Derivationally related form',
    ';c': 'Domain of synset - TOPIC',
    '-c': 'Member of this domain - TOPIC',
    ';r': 'Domain of synset - REGION',
    '-r': 'Member of this domain - REGION',
    ';u': 'Domain of synset - USAGE',
    '-u': 'Member of this domain - USAGE',
    '^': 'Also see'
};

var routes = function () {
    var router = express.Router();

    router.route('/')
        .post(function (req, res) {
            var text = req.body.text;
            var words = text.toLowerCase().split(' ');
            var result = [];

            words.forEach(function (word) {
                word = word.replace(/[^0-9a-z]/gi, '');
                wordnet.lookup(word, function (err, definitions) {
                    if (definitions) {
                        var pointers = [];
                        definitions[0].meta.pointers.forEach(function (pointer) {
                            pointers.push({
                                "pointerSymbol": pointer.pointerSymbol,
                                "words": pointer.data.meta.words,
                                "glossary": pointer.data.glossary,
                                "pointerType": pointerTypes[pointer.pointerSymbol]
                            });
                        });

                        var wres = {
                            "word": word,
                            "synsetType": definitions[0].meta.synsetType,
                            "words": definitions[0].meta.words,
                            "glossary": definitions[0].glossary,
                            "pointers": pointers
                        };

                        result.push(wres);
                    }
                    else {
                        result.push({ "word": word, "result": err.message });
                    }
                    if (result.length === words.length) {
                        res.send(result);
                    }
                });
            });
        })
        .get(function (req, res) {
            res.send("Please use POST request.");
        });

    return router;

}

module.exports = routes;