//======================
//	DEPENDENCIES
//======================
var express 		= require('express');
// var exphbr			= require('express-handlebars');
var methodOverride 	= require('method-override')
var bodyParser 		= require('body-parser');
var mysql			= require('mysql');


var orm				= require('orm');
var apiRoutes 		= require('./app/routing/apiRoutes')(app);
var app 			= express();
var PORT 			= process.env.PORT || 3000;




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