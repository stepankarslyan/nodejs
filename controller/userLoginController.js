var userLoginService = require("../service/userLoginService");

// Do not over divide your code, there is no need of one object for each method !
// put this login method in user controller and use the userService !!!

module.exports = {

  login: function(req, res) {
    var user = req.query.user; // Don't use a local variable when not needed
    
    userLoginService.login({ // You still make error of indentation !!!!
    user: user, // This line and next ones should be one tab more on right
    
    onSuccess: function(message) { // Don't send any message that is unusefull!! just use http 200 to tell all is ok
      res.send(message);
    },
    
    onError: function(error) {
      res.statusCode = 500;
      res.send(error);
    }
    
    });
  }

};
