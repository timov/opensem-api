var mlspotlight = require('dbpedia-spotlight');

// fix dbpedia-spotlight to english language
mlspotlight.fixToEndpoint('english');

module.exports = async function (text) {
    return await new Promise((resolve, reject) => {
        mlspotlight.annotate(text, output => {
            resolve(output);
        });
    });
};