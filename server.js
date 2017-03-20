var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
	res.send('Hello world!');
});

app.get('/about', function (req, res) {
	res.send('About Us!');
});

app.listen(port, function () {
	console.log('Server started on port ' + port);
});
