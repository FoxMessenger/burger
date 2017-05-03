var express = require('express');
// - Create the router for the app, and export the router at the end of your file.
var router = express.Router()

var burger 	= require('./../models/burger.js');

// Home page route
router.get('/', function (request, result) {
  // result.send('Burger Main Page');
  	burger.selectAll(function(data){
  		var burgerData = {
  			burger: data
  		}
  		result.render('index', burgerData);	
	});
});

// // post informational update to the databse on whether a burger was eaten or not
// router.post('/', function (request, result) {
//   	//grab the tableInput and boolean, the values from the request, and the callback
//   	burger.addOne(['burger_name', 'devoured'], [req.body.buger_name, req.body.devoured], function(data){
  
//   		result.redirect('/');	
// 	});
// });

// // update the database
// router.put('/:id', function(require, result) {
// 	// the identifier contains the route parameter id
// 	var identifier = 'id = ' + req.params.id;

// 	console.log('this is the identifier' + identifier);
// })


module.exports = router;