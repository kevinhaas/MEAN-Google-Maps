// Dependencies for the server
// -----------------------------------------
var express = require('express');
var mongoose = require('mongoose');

// process.env.port is an env variable
var PORT = process.env.PORT || 13375;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Express Config
// -----------------------------------------
// Sets connection to MongoDB
mongoose.connect("mongodb://localhost/MeanMapApp");

// Loggin and Parsing
app.use(express.static(__dirname + '/public')); // sets static file location to public
app.use('/node_modules', express.static(__dirname + '/node_modules')); // use node modules
app.use(morgan('dev')); // log with morgan
app.use(bodyParser.json()); // parse app/json
app.use(bodyParser.urlencoded({extended: true})); // parse app/x-www-form-urlencoded
app.use(bodyParser.text()); // allows bodyParser to look at raw text
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse app/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------
require('./public/assets/js/routes.js')(app);

// Listen
// ------------------------------------------
app.listen(port);
console.log('App Listening on port ' + port);
