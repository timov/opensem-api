# opensem-api
API for the Opensem project

This API consists of a couple of endpoints that run different text analysis.
The POST requests should have a "text" parameter in the body representing the text we want to analyse.
The API runs on port 8080 on your localhost. This can be changed in the gulpfile.

## The endpoints:

1. Opensem(/api/opensem)
- This is the main endpoint which does all analisys in one.
2. DbPedia(/api/dbpedia)
3. CoreNLP(/api/corenlp)
You need to have CoreNLP running locally in order for this to work. The simplest and fastest way is using docker:
 ```
  docker run -p 9000:9000 --name coreNLP --rm -i -t motiz88/corenlp
  ```
4. Sentiment(/api/sentiment)
5. WordNet(/api/wordnet)

## Used npm libraries:

- body-parser
  - licence: [MIT](https://github.com/expressjs/body-parser/blob/HEAD/LICENSE)
- corenlp-sentiment
  - licence: [GNU](https://github.com/LocustEater/corenlp-sentiment/blob/master/LICENSE)
- dbpedia-sparql-client
  - licence: [MIT](https://github.com/cdimascio/dbpedia-sparql-client/blob/master/LICENSE)
- dbpedia-spotlight
  - licence: [ISC](https://github.com/dbpedia-spotlight/DBpediaSpotlight.js/blob/master/LICENSE)
- express
  - licence: [MIT](https://github.com/expressjs/express/blob/master/LICENSE)
- get-json
  - licence: [BSD](https://choosealicense.com/licenses/bsd-2-clause/)
- group-array
  - licence: [MIT](https://github.com/doowb/group-array/blob/HEAD/LICENSE)
- gulp
  - licence: [MIT](https://github.com/gulpjs/gulp/blob/master/LICENSE)
- gulp-nodemon
  - licence: [BSD-2-Clause](https://choosealicense.com/licenses/bsd-2-clause/)
- sentiment
  - licence: [MIT](https://github.com/thisandagain/sentiment/blob/develop/LICENSE.md)
- underscore
  - licence: [MIT](https://github.com/jashkenas/underscore/blob/master/LICENSE)
- Wordnet
  - licence: [MIT](https://choosealicense.com/licenses/mit/)
  - third party licence: [WordNet 3.0](https://wordnet.princeton.edu/license-and-commercial-use)
- wordpos
  - licence: [MIT](https://choosealicense.com/licenses/mit/)
- CoreNLP
  - licence: [CoreNLP licence](https://stanfordnlp.github.io/CoreNLP/#license)
- WordNet
  - licence: [WordNet 3.0](https://wordnet.princeton.edu/license-and-commercial-use)
