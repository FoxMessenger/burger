var connection = require("./connection.js");


// TABLE burgers
// 	id INT NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT FALSE,
// 	date TIMESTAMP,
// 	PRIMARY KEY (id)


var orm = {
	// select everything from the database and return it to the client 
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM ??";
	
		connection.query(queryString, [tableInput], function(err, result) {
				if (err) {
					console.log("select All err: " + err);
				}
				// console.log(result);
				callback(result);
		});
	},

	// add a new burger by the input given.
	// tableInput = burgers ??
	// columnName = burger_name (??)
	// value = request.body.burger_name ?
	addOne: function(tableInput, columnName, value, callback) {
	    var queryString = "INSERT INTO ?? (??) VALUES (?)";

	    connection.query(queryString, [tableInput, columnName, value], function (err, result) {
				if (err) {
					console.log("ORM - ADD ONE ERR: " + err);
				}
				// console.log("the QS is: " + queryString)
				// console.log("the table input is: " + tableInput)
				// console.log("the column name is: " + columnName)
				// console.log("the value is: " + value)

				callback(result);

	    });
	},

	// tableInput = burgers
	// columName = devoured
	// condition = true or false, in this case 1
	updateOne: function(tableInput, columnName, condition, columnId, idNumber, callback) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ? = ?"

	    connection.query(queryString, [tableInput, columnName, condition, columnId, idNumber], function (err, result) {
				if (err) {
					console.log("update One err: " + err);
				}
				callback(result);
	    });		
	},

// 	  updateOne: function(tableInput, columnName, colVal, identifierCol, identifier, callback) {
//         var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ? '
//         connection.query(queryString, [tableInput, columnName, colVal, identifierCol, identifier], function (err, result) {
//                 if (err) {
//                     console.log('update One err: ' + err);
//                 }

//                 callBack(result);

//         });
//     },
//       updateOne: function(colVal, identifier, callback) {

//         orm.updateOne('burgers', 'devour', colVal, "id", identifier, function(result) {

//             callback(result);

//         })
//     },

// var queryString = "UPDATE burgers SET burger_name = ? WHERE id = ?"
// var query = "UPDATE burgers SET  devour = 'true' WHERE id = '2'
// 
};	

module.exports = orm;