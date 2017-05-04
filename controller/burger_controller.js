var express = require("express");
// - Create the router for the app, and export the router at the end of your file.
var router = express.Router()

var burger 	= require("./../models/burger.js");

// Home page route
router.get("/", function (request, result) {
  // result.send("Burger Main Page");
  // console.log("select All ran...")
  	burger.selectAll(function(data){
  		var burgerData = {
  			burger: data
  		}
  		result.render("index", burgerData);	
  // console.log("...to the end")
	});
});



// post informational update to the databse on whether a burger was eaten or not
router.post("/", function (request, result) {
  	//grab the values from the request, and the callback
  	console.log("add post ran...")
  	
  	burger.addOne(request.body.burger_name, function(){
  		console.log(request.body)
  		result.redirect("/");	
	});
});



// update the database
router.put("/:id", function(request, result) {
	// the identifier contains the route parameter id
	var identifier = "id = " + request.params.id;

	console.log("this is the identifier" + identifier);
})


module.exports = router;