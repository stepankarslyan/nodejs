var userLoginService = require("../service/userLoginService");

module.exports = {

  login: function(req, res) {
    var user = req.body.user;
    userLoginService.login(user, function(data) {
      res.send(data);
    });
  }

};
