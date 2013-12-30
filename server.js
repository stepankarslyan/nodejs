var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');

// Who told to make 2 controllers? One is enought, user login is not about user?
var userController = require('./controller/userController');


app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post('/camera', cameraController.save);

// Change url to respect REST standard !!!
app.post("/users/registration", userController.add);
app.get("/user/login/id", userController.login);
 
var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
