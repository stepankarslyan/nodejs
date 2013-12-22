var _ = require('underscore');
var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

var controllers = [
	'geolocation',
	'camera'
];

_.each(controllers, function(controller) {
	require('./controller/' + controller + 'Controller').register(app);
});

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
