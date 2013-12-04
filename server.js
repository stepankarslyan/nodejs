var express = require('express');
var app = express();

var geolocationController = require('./controller/geolocationController');

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
});

// use geolocationController.log
app.post('/geolocation', geolocationController.location.save);

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
