// this may change to a mysql database if I have the time
// ==========
// DATA
// ==========

var friends = require('../data/friends');

// ==========
// ROUTING
// ==========
module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
	
	app.post('/api/friends', function(req, res){
	  
	  	// compare the input of the survey with the friends json arrays




	// I am unable to understand how to get the JSON scores from the response. The only output I can get are: the ENTIRE response, the request object, and then undefined





	  	console.log(friends);
	  	console.log(req.body);
	//	{ name: 'Name',
 	//	  photo: 'Namer',
  	//	 'scores[]': [ '2', '3', '1', '1', '3', '1', '3', '2', '2', '1' ] 
  	//  }
	

//========== Code I would use to check the submited scores versus the stored scores
//==========

		// friends[0]scores.map(function(element){
		// 	// for loop
		// 	for (i = 0; i < friends[0]scores.length ; i++) {
		// 		friends[i].scores.diff(res.body[i].scores);
		// 		console.log(element);
		// 	}
			// for (var value of req.body.scores) {
				// compare score of each question in the database to the score of each question submited
				// tally up the difference between each question
				// add that score
				// push that score to an array
				// lowest scoring person wins match
			// }
		// })

		res.send(req.body);
		friends.push(req.body);

	});


}

