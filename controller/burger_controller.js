var express = require('express');
var burger 	= require('./../models/burger');

// - Create the router for the app, and export the router at the end of your file.
var router = express.Router()

// Home page route
router.get('/', function (req, res, next) {
  res.send('Burger Main Page');
  
  	burger.selectAll(function(data){
  
  console.log(data)	
  
  });
  
})

module.exports = router;