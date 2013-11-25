var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
 // Third time !!! Remove empty lines without meaning !!!!
});

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
