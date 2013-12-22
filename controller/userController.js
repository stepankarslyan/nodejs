var userService = require("../service/userService");

module.exports = {
  
  add: function(req ,res) {
    var user = req.body.user;
    userService.add(user);
    res.send(JSON.stringify(user));
  }

};
