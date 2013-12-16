var fs = require("fs");

module.exports = {
	
	save: function(picture, done) {
		// This is not enought, put all pictures in one folder not siply at root folder
		// Name this variable pictureFolder
		var fileName = "output ";
		
		// We use object programming, don't put functions in variables but as functions of the service		
		var formatFileName = function(fileName) {
			return fileName + new Date();
		};
		
		// Don't give the folder name to formatFileName function, as it should be function of the service
		// object it can directly access the pictureFolder property
		// But put the extention in the parameter of the function to build all file name in the function
		// why do you split the file name building here and in the formatFileNameFuntion?
		// Are you sure clients will always send jpeg? Isn't it possible to get the extention of the 
		// picture file from request?
		fs.writeFile(formatFileName(fileName) + ".jpeg", picture, 'base64', function(error) {
			done(error);
		});
	}
	
};
