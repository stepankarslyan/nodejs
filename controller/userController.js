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
    userService.login({ 
      user: req.query.user, 
    
      onSuccess: function(user) {
        res.statusCode = 200;
        res.send(user); 
      },
    
      onError: function(error) {
        res.statusCode = 500;
        res.send(error);
      }
    
    });
  },
  
  findUsers: function(req, res) {
    userService.findUsers({
      users: req.query.users,
      
      onSuccess: function(users) {
        res.send(users);
        res.statusCode = 200;
      },
      
      onError: function(error) {
        res.send(error);
        res.statusCode = 500;
      },  
      
    });
  }, 
  
  updateUser: function(req, res) {
    console.log(req.body.user);
    userService.updateUser({
      user: req.body.user,
      
      onSuccess: function(user) { 
        res.statusCode = 200;
        res.send(user);
      },
      
      onError: function(error) {
        res.statusCode = 500;
      }
      
    });
    
  }

};
