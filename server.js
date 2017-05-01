//======================
//	DEPENDENCIES
//======================
var express 		= require('express');
// var exphbr			= require('express-handlebars');
// var apiRoutes 		= require('./app/routing/apiRoutes')(app);
var methodOverride 	= require('method-override')
var bodyParser 		= require('body-parser');
var mysql			= require('mysql');

var router			= require('./controller/burger_controller')
var orm				= require('./config/orm');

var app 			= express();
var PORT 			= process.env.PORT || 3000;

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

// get all of our static files in the public folder.
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});