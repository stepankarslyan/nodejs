var cameraService = require("../service/cameraService");

module.exports = {
  
  savePicture: function(req, res) {
    // Don't use variable when it is not needed, put directly req.body.picture
    var picture = req.body.picture;
    
    cameraService.savePicture(picture, function(error) {
      // Controller is responsible to transform an error in http code
      // if all is ok just send code 200
      // if error send an code 500 and the json corresponding to the error, this is better than dry "there is an error"
      res.send(error);
    });    
  } // Always put an empty line before and after function declaration
};
