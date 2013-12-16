var express = require('express');
var app = express();

// Don't let unused code, you have git for history !
//var controller = require("/js/controller.js"); 

var geolocationController = require('./controller/geolocationController');
var cameraController = require("./controller/cameraController");

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
app.post("/camera", cameraController.savePicture);

app.get("/hello", function(req, res) {   
  res.send("hello Olivier");
  
});

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
