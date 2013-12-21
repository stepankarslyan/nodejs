var express = require('express');
var app = express();
var _ = require('underscore');

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post('/camera', cameraController.save);

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
