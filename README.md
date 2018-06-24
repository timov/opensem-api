# opensem-api
API for the Opensem project

This API consists of a couple of endpoints that can recieve requests.
The POST requests should have a "text" parameter in the body representing the text we want to analyse.
The API runs on port 8080 on your localhost. This can be changed in the gulpfile.

The endpoints:

1. DbPedia(/api/dbpedia)
2. CoreNLP(/api/corenlp)
You need to have CoreNLP running locally in order for this to work. The simplest and fastest way is using docker:
 ```
  docker run -p 9000:9000 --name coreNLP --rm -i -t motiz88/corenlp
  ```
3. Sentiment(/api/sentiment)
4. WordNet(/api/wordnet)

Used npm libraries:

- --body-parser
  - licence: [MIT](https://github.com/expressjs/body-parser/blob/HEAD/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --corenlp-sentiment
  - licence: [GNU](https://github.com/LocustEater/corenlp-sentiment/blob/master/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Patent use
    -  Private use
- --dbpedia-sparql-client
  - licence: [MIT](https://github.com/cdimascio/dbpedia-sparql-client/blob/master/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --dbpedia-spotlight
  - licence: [ISC](https://github.com/dbpedia-spotlight/DBpediaSpotlight.js/blob/master/LICENSE)
    - Commercial use
    -  Distribution
    -  Modification
    -  Private use
- --express
  - licence: [MIT](https://github.com/expressjs/express/blob/master/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
  -
- --get-json
  - licence: [BSD](https://choosealicense.com/licenses/bsd-2-clause/)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --group-array
  - licence: [MIT](https://github.com/doowb/group-array/blob/HEAD/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use

- --gulp
  - licence: [MIT](https://github.com/gulpjs/gulp/blob/master/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --gulp-nodemon
  - licence: [BSD-2-Clause](https://choosealicense.com/licenses/bsd-2-clause/)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --sentiment
  - licence: [MIT](https://github.com/thisandagain/sentiment/blob/develop/LICENSE.md)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --underscore
  - licence: [MIT](https://github.com/jashkenas/underscore/blob/master/LICENSE)
    - Commercial use
    -  Modification
    -  Distribution
    -  Private use
- --Wordnet
  - licence: [MIT](https://choosealicense.com/licenses/mit/)
  - third party licence: [WordNet 3.0](https://wordnet.princeton.edu/license-and-commercial-use)
- --wordpos
  - licence: [MIT](https://choosealicense.com/licenses/mit/)
- --CoreNLP
  - licence: [CoreNLP licence](https://stanfordnlp.github.io/CoreNLP/#license)
- --WordNet

licence: [WordNet 3.0](https://wordnet.princeton.edu/license-and-commercial-use)
