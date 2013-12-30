var mongoose = require("mongoose");

var userProperty = {
  name: String,
  login: String,
  password: String
};

var userSchema = new mongoose.Schema(userProperty);
var DbUser = mongoose.model("regUser", userSchema);

module.exports = {

  add: function(config) {
    var dbUser = new DbUser(config.user);

      DbUser.findOne({ login: config.user.login }, function (err, regUser) {
      
        if(regUser) {
          console.log("The user with" + " " + config.user.login + " "  + "login already exists!");
          config.onError('you are olready registred');
        }
        else{ 
          dbUser.save();
          config.onSuccess('You are registered successfully');
        }
    });
  }

};
