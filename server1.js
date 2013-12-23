// Don't name files or variables with numers 1, 2, 3... give meaningfull names
// Why do you create a new server file? Who told you to do this? You were supposed to create new web services not a new web server !!!
// Be attentive to what is asked and do exactly what is asked. Programming is technical science that require precision !

var express = require("express");
var app = express();

app.set("title", "My site");
app.get("title"); 

var port = 8888;
app.listen(port);
console.log("server is running at" + " " + port + " " + "port!");
