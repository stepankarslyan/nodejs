var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public')); // the public folder doesn't exist -> don't copy paste things that you don't use, put code for a reason
  // Don't let empty lines without meaning 
});

var port = 8080;
app.listen(port);
console.log("Server started on http://localhost:" + port);
