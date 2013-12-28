var mongoose = require("mongoose");
var DbRegedUser = mongoose.model("regUser");

module.exports = {
  
  login: function(config) {
    console.log(config.user);
    DbRegedUser.findOne({login: config.user.login}, function(err, loggedUser) {
      
      if(loggedUser) {
        config.onSuccess("Welcome, you are logged in!");
      }
      else{
        config.onError("Please register!");  
      }
    
    });
  }
  
};
