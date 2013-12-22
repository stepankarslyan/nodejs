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

  add: function(user) {
    var users = [];
    users.push(user);
    var dbRegUser = new DbRegUser(user);
    dbRegUser.save();
  }

};
