var mongoose = require("mongoose");
var _ = require("underscore");

var userProp = {
  username: String,
  login: String,
  password: String
};

var userSchema = new mongoose.Schema(userProp);
var DbRegUser = mongoose.model("regUser", userSchema);
mongoose.connect("mongodb://localhost/test");

module.exports = {

  add: function(user, done) {
    var dbRegUser = new DbRegUser(user);
    DbRegUser.findOne({ login: user.login }, function (err, regUser) {
      console.log(regUser);
      if(regUser) {
      
        console.log("The user with" + " " + user.login + " "  + "login already exists!");
        done('you are olready registred');
      }else{
        
        dbRegUser.save();
        done('you are registred successly');
     
      }
    });
  }

};

