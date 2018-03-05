# opensem-api
API for the Opensem project

This API consists of a couple of endpoints that can recieve requests.
The POST requests should have a "text" parameter in the body representing the text we want to analyse.
The API runs on port 8080 on your localhost. This can be changed in the gulpfile.

The endpoints:

1. DbPedia(/api/dbpedia)
2. CoreNLP(/api/corenlp)
3. Sentiment(/api/sentiment)
4. WordNet(/api/wordnet)
