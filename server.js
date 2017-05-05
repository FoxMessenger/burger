//======================
//	DEPENDENCIES
//======================
var express 		= require("express");
var exphbs			= require("express-handlebars");

var methodOverride 	= require("method-override")
var bodyParser 		= require("body-parser");
var mysql			= require("mysql");

var router			= require("./controller/burger_controller")
var orm				= require("./config/orm");

var app 			= express();
var PORT 			= process.env.PORT || 3000;

app.use(methodOverride("_method"));

// get all of our static files in the public folder.
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});