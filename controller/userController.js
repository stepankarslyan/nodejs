var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
    var user = req.body.user;
   
    userService.add({
      user: user,
      
      onSucess(message){
        res.send(message);
      },
      
      onError(error){
        res.statusCode = 500;
        res.send(error);
      }
      
    });
  }

};
