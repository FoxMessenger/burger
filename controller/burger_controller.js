var express = require('express');
// - Create the router for the app, and export the router at the end of your file.
var router = express.Router()

var burger 	= require('./../models/burger.js');


// Home page route
router.get('/', function (req, res) {
  // res.send('Burger Main Page');
  	burger.selectAll(function(data){
  		var burgerData = {
  			burger: data
  		}

  		res.render("index", burgerData);	

	});
});

router.post('/', function (req, res) {
  	
  	burger.addOne(value, function(data){
  
  		res.send(data);	
	});

  	var value = req.body;
  	// req.body
  	
});

module.exports = router;