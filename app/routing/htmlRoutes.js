// ============
// DEPENDENCIES
// ============
var path = require ('path');

// ============
// ROUTING
// ============
path.resolve('../../public');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile('home.html', {root: './app/public'});
		// res.sendFile(path.join(__dirname, '/../../public/home.html'))
	});

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'))
	});

	// this is used to make an unknown page as default to index.html
	app.use(function(req, res){
		res.sendFile('home.html', {root: './app/public'});
	});

};