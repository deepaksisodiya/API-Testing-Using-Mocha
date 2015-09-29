/**
 * Created by deepaksisodiya on 20/09/15.
 */


var express = require('express'),
    app = express(),
    url = 'mongodb://localhost:27017/Mocha',
    port = 3001,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

// mongoose model start

var userSchema = require('./model.js');

// mongoose model end


// mongoDB connection start
mongoose.connect(url);

var db = mongoose.connection;

db.on('connected', function () {
    console.log('Connected To MongoDB Database');
});
db.on('error', function (err) {
    console.log('Error in connecting to mongoDB ', err);
});

app.listen(port, function () {
    console.log('listening for requests on localhost:%s', port);
});
// mongoDB connection end


var Users = mongoose.model('Users');

var userController = require('./controller.js');

app.use('/', require('./routes.js'));