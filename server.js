var express = require('express');
var app = express();
// Why do you put unused code? If you don't need the line remove it !
//var _ = require('underscore');

var geolocationController = require('./controller/geolocationController');
var cameraController = require('./controller/cameraController');
var userController = require('./controller/userController');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use('/lib', express.static(__dirname + '/bower_components'));
	app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post('/camera', cameraController.save);
// Why this fantasy one space at beginning of your line? stay standard !!!!
// What about rest? Rest is representation of resources that can be created, updated deleted listed
// reguser is not a resource, it's a verb ! What you whant is to add a user so url /users to tell wich king of resource and post as you did for adding
// GET users -> list users
// GET users/1 -> read user with id 1
// POST users -> add new user
// PUT users/1 -> update the user with id 1
// DEL users/1 -> remove the user with id 1
// I explained you this many times already ! so learn and don't play, be professionnal and remember what is explained to you
 app.post("/reguser", userController.add);
 
var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
