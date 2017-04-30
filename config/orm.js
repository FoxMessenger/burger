var connection = require("./connection.js");

var orm = {
	selectAll: function() {
		var queryString = "SELECT * FROM db_name";
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
		});
	}
};

module.exports = orm;