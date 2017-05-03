var orm = require('./../config/orm.js');

var burger = {
	selectAll: function(callback) {

		orm.selectAll('burgers', function(result) {

			callback(result);
		})
	},
	
	// create function
	addOne: function(tableInput, value, callback) {
		// this will take in the data table, the col, the values, and then the call back
		orm.addOne('burger', tableInput, value, function(result) {
			
			callback(result);

		})
	},
	
	// this will take the data table, object column values, the condition, and the callback
  	updateOne: function(ColumnValues, identifier, callback) {
    	
    	orm.updateOne('burgers', ColumnValues, identifier, function(result) {
		
			callback(result);

		})
    },
  		
		// this will take the data table, the condition, and the callback
  	devour: function(identifier, callback) {
	    orm.devour('burgers', identifier, function(result) {
	      	
	      	callback(result);
	
	    });
  	}
}

module.exports = burger;