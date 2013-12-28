var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');
var userController = require('./controller/userController');
var userLoginController = require('./controller/userLoginController');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post('/camera', cameraController.save);

// Change url to respect REST standard !!!
app.post("/reguser", userController.add);
app.get("/userLogin", userLoginController.login);
 
var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
