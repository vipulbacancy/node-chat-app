var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// Login Page
app.get('/login', function(req, res){
	res.render('pages/login');
});

// Register
app.get('/register', function(req, res){
	res.render('pages/register');
});		

// contact 
app.get('/contact', function(req, res){
	res.render('pages/contact');
});

app.listen(8080);
console.log('8080 is the magic port');