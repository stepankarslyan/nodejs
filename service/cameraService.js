var fs = require("fs");

module.exports = {

  savePicture: function(picture) {
    
    var base = decodedBase64;
    fs.writeFile("picture.jpg", picture, base,"binary", function(error) {
      if(error) {
        console.log(error);      
      }else{
        console.log("Your picture's saved!");
      }    
    });
  }

};
