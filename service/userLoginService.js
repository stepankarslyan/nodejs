var mongoose = require("mongoose");

// Simply call user not RegUser
// I told to register a user not to register a regUser don't mix the entity (object of your actions) and the actions
// register is an action user is the entity
var DbRegedUser = mongoose.model("regUser");

// Move this in the userService, don't put only one method by service !!!
module.exports = {
  
  login: function(config) {
    console.log(config.user); // Don't put log except for debug but remove it after !!!
    DbRegedUser.findOne({login: config.user.login} /* write this anonymous object on some line */, function(err, loggedUser) { // This is a line of code splitted on some lines in file so put one empty line before and after !!!
      
      if(loggedUser) { // Why do you put empty line before this???
        config.onSuccess("Welcome, you are logged in!"); // Don't send message
        
        // If you were listening to me you would notice that login is not only to find a user with a login, but also to check that his password is correct too
        // Your login method is just checking that the user exists not that the user password is correct !!!
        // This is a big security error !!! Be carefull in what must be done
      }
      else{
        config.onError("Please register!"); // You send an error not an advice about what to do next
      }
    
    });
  }
  
};
