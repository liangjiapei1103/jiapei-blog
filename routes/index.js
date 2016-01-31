// var express = require('express');
// var router = express.Router();

/* GET home page. */
module.exports = function (app) {

	// Routes
	// Home Page
	app.get('/', function(req, res) {
	  res.render('index', { title: 'Home' });
	});

	// Register Page
	app.get('/register', function (req, res) {
		res.render('register', {title: 'Register'});
	});

	app.post('/register', function (req, res) {

	});

	// Login Page
	app.get('/login', function (req, res) {
		res.render('login', {title: 'Login'});
	});

	app.post('/login', function (req, res) {

	});


	// Post Page
	app.get('/post', function (req, res) {
		res.render('post', {title: 'Post'});
	});

	app.post('/post', function (req, res) {

	});

	// Logout
	app.get('/logout', function (req, res) {

	});
};

// module.exports = router;
