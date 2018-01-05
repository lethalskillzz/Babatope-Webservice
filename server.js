var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    MONGODB = process.env.MONGOLAB_URI || 'mongodb://mongodb/Topedb2',
    mongoose = require('mongoose'),
    Task = require('./api/models/appModel'),
    bodyParser = require('body-parser');

app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB);

console.log('MongoDB connecting to remote URI: ' + MONGODB);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/appRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('tope RESTful API server started on: ' + port);