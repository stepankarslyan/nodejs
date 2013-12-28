var http = require("http");

http.createServer(function(req, res) {
  res.end("Hello browser!");
}).listen(5555);
 
 console.log("Server running at 8888 port");

