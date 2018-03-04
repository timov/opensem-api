var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var dbpediaRouter = require('./routers/dbpediaRouter.js')();
var sentimentRouter = require('./routers/sentimentRouter.js')();
var corenlpRouter = require('./routers/corenlpRouter.js')();
var wordnetRouter = require('./routers/wordnetRouter.js')();

app.use('/api/dbpedia', dbpediaRouter);
app.use('/api/sentiment', sentimentRouter);
app.use('/api/corenlp', corenlpRouter);
app.use('/api/wordnet', wordnetRouter);

app.get('/', function (req, res) {
    res.send('Welcome to OpenSem!');
});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port);
});

