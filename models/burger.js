var orm = require("./../config/orm.js");

var burger = {
	selectAll: function(callBack) {
		orm.selectAll("burgers", function(result) {
			callBack(result);
		})
	}

	// orm.selectAll: ("burgers", callBack);

	// Find a pet in the pets table by an animal_name of Rachel.
	// orm.insertOne("pets", "animal_name", "Rachel");

	// // Find the buyer with the most pets.
	// orm.updateOne("buyer_name", "buyer_id", "buyers", "pets");


	// - Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
	// - Export at the end of the burger.js file.
	}

module.exports = burger;