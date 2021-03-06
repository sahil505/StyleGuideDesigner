'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./app/routes');

// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

// Set static path
app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.json());

app.use('/settings', routes);

// Express Server Setup
app.listen(app.get('port'), function (err) {
	if (err) {
		console.log('Express Server Error!');
	} else {
		console.log('Express server listening on port ' + app.get('port'));
	}
});
