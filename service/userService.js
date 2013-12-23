var mongoose = require("mongoose");
var _ = require("underscore"); // Why do you require this if you don't use?

// Don't shortcut words ! use userProperties not userProp
var userProp = {
  username: String, // Don't put field name userName in a user entity, simply put name, add more information when it's needed
  login: String,
  password: String
};

var userSchema = new mongoose.Schema(userProp);

// Why do you put Reg??? you have user then put DbUser !!! Don't add unnecessary things
var DbRegUser = mongoose.model("regUser", userSchema);

// This responsability of server not service ! Other kind of service will have access to database, the server is responsible to connect to database
mongoose.connect("mongodb://localhost/test");

module.exports = {

  // You must manage errors, don't reinvent this management each time, just reuse patterns ! This make you apply working solutions fast and make your code working the same than the other code in the programm
  // use a config object with properties, user, onSuccess and orError
  add: function(user, done) {
    var dbRegUser = new DbRegUser(user);
    DbRegUser.findOne({ login: user.login }, function (err, regUser) { // This is the beginning of 1 line of code on some lines in file -> add on empty line before and after it !!!
      console.log(regUser); // Avoid overuse of console, put it as debug but remove it at the end
      if(regUser) { // Why do you put an empty line after this?
      
        console.log("The user with" + " " + user.login + " "  + "login already exists!"); // Do you think that the user of your webservice will be able to read log on your server ??? Don't EAT errors, make them go back to the object colling your service
        done('you are olready registred');
      }else{ // Write else on next line and put a space between else and {, don't start this block of code with an empty line !!!!
        
        dbRegUser.save(); // Don't you think that save can't raise any error? Never hide possible errors this cause bugs that are very difficult to find when the code get bigger
        done('you are registred successly'); // Why again an empty line? This is not artistic work ! apply the code style rules !!!
     
      }
    });
  }

};

