var mlspotlight = require('dbpedia-spotlight');
var _ = require('underscore');
var getJSON = require('get-json');
var dps = require('dbpedia-sparql-client').default;

// fix dbpedia-spotlight to english language
mlspotlight.fixToEndpoint('english');
const wikidataURL = "https://www.wikidata.org/wiki/";

function mapTypesData(types) {
    var typesArray = types.split(',');
    typesArray = typesArray.map((x) => ({ key: x.split(':')[0], value: x.split(':')[1] }));
    var grouped = _.mapObject(_.groupBy(typesArray, 'key'),
        list => list.map(type => type.value));

    return {
        wikidataUrls: grouped.Wikidata ? grouped.Wikidata.map((x) => (wikidataURL + x)) : '',
        schemas: grouped.Schema ? grouped.Schema.map((x) => x): '',
        dbpedia: grouped.DBpedia ? grouped.DBpedia.map((x) => x) : ''
    }
}

async function mapWikipediaUrl(dbpediaUrl) {
    var query = 'SELECT ?id WHERE { <' + dbpediaUrl + '> dbo:wikiPageID ?id. }';

    return dps.client()
        .query(query)
        .asJson()
        .then(function (r) {
            wikipediaUrl = 'https://en.wikipedia.org/?curid=' + r.results.bindings[0].id.value;
            return wikipediaUrl;
        })
        .catch(function (e) { console.log(e); });
}

async function mapResource(resource) {
    var types = resource['@types'];
    var dbpediaUrl = resource['@URI'];
    var typesData = types ? mapTypesData(types) : '';
    var wikipediaUrl = await mapWikipediaUrl(dbpediaUrl);
    return {
        surfaceForm: resource['@surfaceForm'],
        similarityScore: resource['@similarityScore'],
        dbpediaUrl: dbpediaUrl,
        wikipediaUrl: wikipediaUrl,
        typesData: typesData
    };
}

module.exports = async function (text) {
    return await new Promise((resolve, reject) => {
        mlspotlight.annotate(text, output => {
            var result = {};
            if (!output.response.Resources) {
                resolve(result);
                return;
            }
            result.resources = Promise.all(output.response.Resources.map(async x => {
                return await mapResource(x);
            })).then((result) => resolve(result));
        });
    });
};