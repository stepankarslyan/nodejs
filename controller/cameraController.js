var cameraService = require("../service/cameraService");

module.exports = {
  
  savePicture: function(req, res) {
    var picture = req.body.picture;
    
    cameraService.savePicture(picture, function(error) {
      res.send(error);
    });    
  }
};
