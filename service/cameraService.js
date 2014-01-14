var fs = require("fs");

module.exports = {
	pictureFolder: "uploadedPictures",
	
	save: function(config) {
		fs.writeFile(this.formatFileName(), config.picture, 'base64', function(error) {
			if(error) {
				config.onError(error);
			}
			else {
				config.onSuccess();
			}
		});
		
	},

	formatFileName: function(fileType) {
		return this.pictureFolder + '/' + new Date() + '.jpeg';
	}
	
};
