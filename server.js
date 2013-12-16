var express = require('express');
var app = express();

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post('/camera', cameraController.save);

// The number of controller will grow, a good solution is to delegate the
// web service registration to each controller
// One way to do this is to add a function register to controllers and to 
// call it from here
/*
var controllers = [
	'geolocation',
	'camera'
];

_.each(controllers, function(controller) {
	require('./controller/' + controller + 'Controller').register(app);
});
*/

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
