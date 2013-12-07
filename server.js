var express = require('express');
var app = express();
//var controller = require("/js/controller.js"); 

var geolocationController = require('./controller/geolocationController');

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
<<<<<<< HEAD
});

//app.get("/location", controller.getLocation);
=======
  app.use(express.bodyParser());
});

app.post('/geolocation', geolocationController.log);
>>>>>>> Levon

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
