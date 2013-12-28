var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
    var user = req.body.user;
   
    userService.add({
      user: user, // Put directly req.body.user, there is no need to use one local variable for this only use
      
      onSucess: function(message) { // return only the user
        
        // Why do you send a message?? this is not REST !!! Answer http code corresponding to created and put the 
        // reference to the user ressource in header
        res.send(message);
      },
      
      onError: function(error) {
        res.statusCode = 500;
        res.send(error);
      }
      
    });
  }
  
  // Put user login code here !!!

};
