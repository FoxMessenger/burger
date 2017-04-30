//======================
//	DEPENDENCIES
//======================

var bodyParser 	= require('body-parser');
var express 	= require('express');
var app 		= express();
var path 		= require('path');
var apiRoutes 	= require('./app/routing/apiRoutes')(app);
var PORT 		= process.env.PORT || 3000;
var mysql		= require('mysql');
var orm			= require('orm');

// get all of our static files in the public folder.
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});