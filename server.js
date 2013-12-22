var express = require('express');
var app = express();

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

geolocationController.register(app);
cameraController.register(app);

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
