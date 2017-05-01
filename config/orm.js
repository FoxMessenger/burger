var connection = require("./connection.js");


// TABLE burgers
// 	id INT NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT FALSE,
// 	date TIMESTAMP,
// 	PRIMARY KEY (id)


var orm = {
	selectAll: function(tableInput, valueOfColumn) {
		var queryString = "SELECT * FROM burgers";
	
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},

	insertOne: function(tableInput, burgerName, boolean, date) {
	    var queryString = 'INSERT INTO ?? VALUES ? ? ?';
	    console.log(queryString);

	    connection.query(queryString, [tableInput, burgerName, false, date], function(err, result) {
			if (err) throw err;
			console.log(result);
	    });
	},
  
	updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
		var queryString = "UPDATE ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
			// update burgers boolean from false to true
    	connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
			if (err) throw err;
			console.log(result);
    	});
  	}
};	

module.exports = orm;