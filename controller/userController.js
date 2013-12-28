var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
    var user = req.body.user;
   
    userService.add({
      user: user,
      
      onSucess: function(message) {
        res.send(message);
      },
      
      onError: function(error) {
        res.statusCode = 500;
        res.send(error);
      }
      
    });
  }

};
