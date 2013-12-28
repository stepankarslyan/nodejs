var mongoose = require("mongoose");
var DbRegedUser = mongoose.model("regUsers");

module.exports = {
  
  login: function(user, done) {
    
    DbRegedUser.findOne({login: user.login}, function(err, loggedUser) {
      
      if(loggedUser) {
        done("Welcome, you are logged in!");
      }
      else{
        done("Please register!");  
      }
    
    });
  }
  
};
