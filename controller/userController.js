var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
    var user = req.body.user;
    
    // Use the error management pattern we already used, transform errors in http codes, 200 and 500
    // http code are even more precises, you cant use a code 200 that is created and put the id of the new creadte user in a 
    // header property of http response search for it
    
    userService.add(user, function(message){
      res.send(message);
    });
  }

};
