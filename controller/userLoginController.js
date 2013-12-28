var userLoginService = require("../service/userLoginService");

module.exports = {

  login: function(req, res) {
    var user = req.query.user;
    
    userLoginService.login({
    user: user,
    
    onSuccess: function(message) {
      res.send(message);
    },
    
    onError: function(error) {
      res.statusCode = 500;
      res.send(error);
    }
    
    });
  }

};
