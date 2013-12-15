var fs = require("fs");

module.exports = {
	
	save: function(picture, done) {
		var fileName = "output ";
				
		var formatFileName = function(fileName) {
			return fileName + new Date();
		};
		
		fs.writeFile(formatFileName(fileName) + ".jpeg", picture, 'base64', function(error) {
			done(error);
		});

	}
	
};
