var path = require('path');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

var home = require('./app/controller/index');
var demo = require('./app/controller/demo');
var settings = require('./app/controller/settings');
var documentation = require('./app/controller/documentation');


// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

// Set static path
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', home);
app.use('/demo', demo);
app.use('/settings', settings);
app.use('/documentation', documentation);

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
