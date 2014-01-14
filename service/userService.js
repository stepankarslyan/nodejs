// Tell me why i loose my time commenting your code if you just remove my comments and do not correct your code???
// Read the comments !!! https://github.com/stepankarslyan/nodejs/commit/cbbd3696d5d0df2c4d10f696782c498980856046#diff-adb5e5c33eb2b613fbc1d12956b96128


var mongoose = require("mongoose");

var userProperty = {
  name: String,
  login: String,
  password: String
};

var userSchema = new mongoose.Schema(userProperty);
var DbUser = mongoose.model("user", userSchema); // Don't call regUser but user

module.exports = {

  add: function(config) {
    var dbUser = new DbUser(config.user);

          dbUser.save();
          config.onSuccess(config.user);
  },
      
  login: function(config) {
    
    DbUser.findOne(
      {login: config.user.login, password: config.user.password} ,
       
      function(err, loggedUser) {               
         if(loggedUser) { 
          config.onSuccess(config.user);   
         }
          else{
            config.onError(error); 
          };  
      }
    );  
  },
  
  findUsers: function(config) {
    
    DbUser.find(function(error, reggedUsers) {
      if(error) {
        config.onError(error);
      }
      else{
        config.onSuccess(config.users)
      }
    });
  }, 
  
  updateUser: function(config) {
   
    DbUser.findOneAndUpdate({ login: config.user.login}, config.user,
    
    function(error, user) {
      if(error) {
        config.onError(error);
      }
      else{
        config.onSuccess(config.user)
        console.log(config.user);
      }
      
    });
  }
  
};
