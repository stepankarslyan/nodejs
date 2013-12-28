// Tell me why i loose my time commenting your code if you just remove my comments and do not correct your code???
// Read the comments !!! https://github.com/stepankarslyan/nodejs/commit/cbbd3696d5d0df2c4d10f696782c498980856046#diff-adb5e5c33eb2b613fbc1d12956b96128


var mongoose = require("mongoose");

var userProperty = {
  name: String,
  login: String,
  password: String
};

var userSchema = new mongoose.Schema(userProperty);
var DbUser = mongoose.model("regUser", userSchema); // Don't call regUser but user

module.exports = {

  add: function(config) {
    var dbRegUser = new DbRegUser(config.user);

      DbRegUser.findOne({ login: config.user.login }, function (err, regUser) { // Why do you indent this line?
      
        if(regUser) { // Don't do work that is not asked !!! Don't check if user already exists !!!
          console.log("The user with" + " " + user.login + " "  + "login already exists!");
          config.onError('you are olready registred');
        }
        else{ 
          dbRegUser.save();
          config.onSuccess('You are registered successfully');
        }
    });
    
    // Just register user and return the user with id ! Don't do what is not asked !!!
  }

  // ADD login method here !!!!
};
