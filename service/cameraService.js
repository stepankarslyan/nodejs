var fs = require("fs");

module.exports = {
	pictureFolder: "uploadedPictures",
	
	save: function(picture, done) {
		fs.writeFile(this.formatFileName(), picture, 'base64', function(error) {
			done(error);
		});
	},

	formatFileName: function(fileType) {
		return this.pictureFolder + '/' + new Date() + '.jpeg';
	}
	
};
