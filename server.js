var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello world!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public)'));

app.listen(PORT, function () {
	console.log('Server started on port ' + PORT);
});
