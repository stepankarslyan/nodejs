var fs = require("fs");

module.exports = {

  // The role of service is to do reusable job, but not display. Display is role of controller
  // Use a config object with picture, onSuccess and onError to let the controller
  // responsible of giving the file, and what to do on success and on error
  savePicture: function(picture) { // Don't let empty line at beginning of functions
    
    var base = decodedBase64;
    fs.writeFile("picture.jpg", picture, base,"binary", function(error) { // Add empty line around one line of code spread on many lines in file, don't put empty line only if it's the first or the last line of the function
      // - Do you thing that the web service will be called only one time? No it can be reused so you must find a
      // system that will give each picture an unique name
      // - Save all this pictures in on folder not in root folder
      // - You can't be sure that type of picture will be jpg, it can be png bmp or other type of picture, can't you find a way to get this type from request?
      
      if(error) {
        console.log(error);      
      }else{ // Put else on next line and let a space betweend else and { -> else {
        console.log("Your picture's saved!");
      }    
    });
  }

};
