var orm = require("./../config/orm.js");

var burger = {
	selectAll: function(callback) {

		orm.selectAll("burgers", function(result) {

			callback(result);
		})
	},
	
	
	// tableInput = burger ??
	// columnName = burger_name (??)
	// value = request.body.burger_name ?

	// create function
	addOne: function(value, callback) {
		// this will take in the data table, the col, the values, and then the call back
		orm.addOne("burgers", "burger_name", value, function(result) {
			callback(result);

		})
	},
	
	// this will take the data table, object column values, the condition, and the callback
  	updateOne: function(identifier, callback) {
    	
    	orm.updateOne("burgers", "burger_name", identifier, function(result) {
		
			callback(result);

		})
    },
  		
		// this will take the data table, the condition, and the callback
  	devour: function(identifier, callback) {
	    orm.devour("burgers", identifier, function(result) {
	      	
	      	callback(result);
	
	    });
  	}
}

module.exports = burger;