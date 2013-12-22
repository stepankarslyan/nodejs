var express = require("express");
var app = express();

app.set("title", "My site");
app.get("title"); 

var port = 8888;
app.listen(port);
console.log("server is running at" + " " + port + " " + "port!");
