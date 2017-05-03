var connection = require("./connection.js");


// TABLE burgers
// 	id INT NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT FALSE,
// 	date TIMESTAMP,
// 	PRIMARY KEY (id)


var orm = {
	// select everything from the database and return it to the client 
	selectAll: function(tableInput, callBack) {
		var queryString = "SELECT * FROM ??";
	
		connection.query(queryString, [tableInput], function(err, result) {
				if (err) {
					console.log('select All err: ' + err);
				}

				callBack(result);
		});
	},

	addOne: function(tableInput, columnName, value, callBack) {
	    var queryString = 'INSERT INTO ?? VALUES ? ?';

	    connection.query(queryString, [tableInput, columnName, value], function (err, result) {
				if (err) {
					console.log('add One err: ' + err);
				}

				callBack(result);

	    });
	},

	updateOne: function(tableInput, columnName, identifier, callback) {
		var queryString = 'UPDATE ?? SET ? WHERE ?'
	    connection.query(queryString, [tableInput, columnName, identifier], function (err, result) {
				if (err) {
					console.log('update One err: ' + err);
				}

				callBack(result);

	    });		
	},

	devour: function(tableInput, identifier, callback) {
		var queryString = 'DELETE FROM ?? WHERE ?'
		connection.query(queryString, [tableInput, identifier], function (err, result) {
			if (err) {
					console.log('devour err: ' + err);
				}
			callback(result);
		}) 
	}
};	

module.exports = orm;