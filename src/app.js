var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var dbpediaRouter = require('./routers/dbpediaRouter.js')();
var sentimentRouter = require('./routers/sentimentRouter.js')();
var corenlpRouter = require('./routers/corenlpRouter.js')();
var wordnetRouter = require('./routers/wordnetRouter.js')();
var mainRouter = require('./routers/mainRouter.js')();

app.use('/api/dbpedia', dbpediaRouter);
app.use('/api/sentiment', sentimentRouter);
app.use('/api/corenlp', corenlpRouter);
app.use('/api/wordnet', wordnetRouter);
app.use('/api/opensem', mainRouter);

app.get('/', function (req, res) {
    res.send('Welcome to OpenSem!');
});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port);
});

