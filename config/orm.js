var connection = require("./connection.js");


// TABLE burgers
// 	id INT NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT FALSE,
// 	date TIMESTAMP,
// 	PRIMARY KEY (id)


var orm = {
	selectAll: function(tableInput, callBack) {
		var queryString = "SELECT * FROM ??";
	
		connection.query(queryString, [tableInput], function(err, result) {
			if (err) throw err;
			console.log(result);
			callBack(result);
		});
	},

	// insertOne: function(tableInput, columnName, value, callBack) {
	//     var queryString = 'INSERT INTO ?? VALUES ? ?';
	//     console.log(queryString);

	//     connection.query(queryString, [tableInput, columnName, value], function (err, result) {
	// 		if (err) throw err;
	// 		console.log(result);
	//     });
	// },
  
	// updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
	// 	var queryString = "UPDATE ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
	// 		// update burgers boolean from false to true
 //    	connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function (err, result) {
	// 		if (err) throw err;
	// 		console.log(result);
 //    	});
 //  	}
};	

module.exports = orm;