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
-	body-parser
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
-	corenlp-sentiment
o	licence: GNU
	Commercial use
	 Modification
	 Distribution
	 Patent use
	 Private use
-	dbpedia-sparql-client
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
-	dbpedia-spotlight
o	licence: ISC
	Commercial use
	 Distribution
	 Modification
	 Private use
-	express
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
o	
-	get-json 
o	licence: BSD
	Commercial use
	 Modification
	 Distribution
	 Private use
-	group-array
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use

-	gulp
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
-	gulp-nodemon
o	licence: BSD-2-Clause
	Commercial use
	 Modification
	 Distribution
	 Private use
-	sentiment
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
-	underscore
o	licence: MIT
	Commercial use
	 Modification
	 Distribution
	 Private use
-	Wordnet
o	licence: MIT
o	third party licence: WordNet 3.0
-	wordpos
o	licence: MIT
-	CoreNLP
o	licence: CoreNLP licence
-	WordNet
o	licence: WordNet 3.0
