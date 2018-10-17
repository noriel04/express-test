var express = require('express');
var mongoose = require('mongoose');
var parser = require('body-parser');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiControllers');

var app = express();

var port = process.env.port || 3000;

app.use( '/', express.static(__dirname+'/public') );

app.set( 'view engine', 'ejs' );

mongoose.connect(config.getDBConnectionString());
setupController(app);
apiController(app);

app.listen(port); 