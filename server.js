var express = require('express');
var app = express();

var geolocationController = require('./controllers/geolocationController');

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

app.get('/geolocation', geolocationController.saveGeolocation);

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
