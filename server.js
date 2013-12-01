var express = require('express');
var app = express();
var controller = require(".public/js/controller.js"); 

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});
app.get("/location", controller.getLocation);

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
