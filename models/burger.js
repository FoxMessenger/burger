var orm = require("./../config/orm.js");

var burger = {
	selectAll: function(callback) {

		orm.selectAll("burgers", function(result) {

			callback(result);
		})
	},
	
	// create function
	addOne: function(tableInput, value, callback) {
		// this will take in the data table, the col, the values, and then the call back
		orm.insertOne("burger", tableInput, value, function(result) {
			
			callback(result);

		})
	},
	
	// this will take the data table, object column values, the condition, and the callback
  	updateOne: function(objColVals, condition, callback) {
    	
    	orm.update("burgers", objColVals, condition, function(result) {
		
			callback(result);

		})
    },
  		
		// this will take the data table, the condition, and the callback
  	devour: function(condition, callback) {
	    orm.delete("burgers", condition, function(result) {
	      	
	      	callback(result);
	
	    });
  	}
}

module.exports = burger;