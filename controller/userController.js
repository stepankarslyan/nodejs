var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
      
    userService.add({
      user: req.body.user, 
      
      onSuccess: function(user) { 
        res.send(user);
      },
      
      onError: function(error) {
        res.statusCode = 500;
        res.send(error);
      }
      
    });
  
  },
   
  login: function(req, res) {      
    userService.login(
    { 
      user: req.query.user, 
    
      onSuccess: function(user) {
        res.statusCode = 200;
        res.send(user); 
      },
    
      onError: function(error) {
        res.statusCode = 500;
        res.send(error);
      }
    
    }
    );
  }

};
