var wordnet = require('wordnet');
var WordPOS = require('wordpos'),
    wordpos = new WordPOS();
var groupArray = require('group-array');
var _ = require('underscore');
var Constants = require('../constants/wordnetConstants');

function isRelevant(word) {
    return Constants.posTags.indexOf(word.pos) > -1;
}

module.exports = async function (words) {
    let promises = words.filter(word => isRelevant(word)).map(async (word) => {

        let lemma = word.lemma;
        let pos = word.pos;

        let lookupResponse = await wordpos.lookup(lemma);

        if (pos.startsWith('VB')) {
            lookupResponse = await wordpos.lookupVerb(lemma);
        } else if (pos.startsWith('RB')) {
            lookupResponse = await wordpos.lookupAdverb(lemma);
        } else if (pos.startsWith('NN') || pos.startsWith('PR')) {
            lookupResponse = await wordpos.lookupNoun(lemma);
        } else if (pos.startsWith('JJ')) {
            lookupResponse = await wordpos.lookupAdjective(lemma);
        }

        lookupResponse = _.first(lookupResponse, 3);

        let response = await Promise.all(lookupResponse.map(async res => {
            let pointers = [];
            if (res.ptrs.length > 0) {
                await Promise.all(res.ptrs.map(async pointer => {
                    let seekResponse = await wordpos.seek(pointer.synsetOffset, pointer.pos);
                    if (pointer.pointerSymbol != '~')
                        pointers.push({
                            "pointerType": Constants.pointerTypes[pointer.pointerSymbol],
                            "words": seekResponse.synonyms,
                            "glossary": seekResponse.gloss,
                        });
                }));
            }
            return {
                "synsetType": res.synsetType,
                "synonyms": res.synonyms,
                "glossary": res.gloss,
                "pointers": groupArray(pointers, 'pointerType')
            };
        }));

        let synsets = await Promise.all(response);
        return {
            "word": lemma,
            "synsets": synsets
        }
    });

    let result = await Promise.all(promises);
    return result;
};