var CoreNLP = require('corenlp');
var Properties = CoreNLP.Properties;
var Pipeline = CoreNLP.Pipeline;

module.exports = async function (text) {
    const props = new Properties({
        annotators: 'tokenize,ssplit,pos,ner,parse',
    });

    const pipeline = new Pipeline(props, 'English'); // uses ConnectorServer by default
    const sent = new CoreNLP.default.simple.Sentence(text);

    return await pipeline.annotate(sent)
        .then(sent => {
            return CoreNLP.default.util.Tree.fromSentence(sent);
        })
        .catch(err => {
            return err;
        });
};
