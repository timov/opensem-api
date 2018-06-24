var CoreNLP = require('corenlp-sentiment');
var Properties = CoreNLP.Properties;
var Pipeline = CoreNLP.Pipeline;
var Constants = require('../constants/corenlpConstants');

function isRelevant(token) {
    return Constants.posTags.indexOf(token._pos) > -1;
}

module.exports = async function (text) {
    const props = new Properties({
        annotators: Constants.annotators
    });

    const pipeline = new Pipeline(props, 'English'); // uses ConnectorServer by default
    const doc = new CoreNLP.default.simple.Document(text);

    return await pipeline.annotate(doc)
        .then(doc => {
            return {
                sentences: doc._sentences.map(s => ({
                    text: s.toString(),
                    tokens: s._tokens
                        .filter(t => isRelevant(t))
                        .map(function (t) {
                            return {
                                index: t._index,
                                text: t._text,
                                lemma: t._lemma,
                                originalText: t._originalText,
                                pos: t._pos,
                                ner: t._ner
                            }
                        }),
                    sentiment: s._sentiment
                }))
            };
        })
        .catch(err => {
            return err;
        });
};