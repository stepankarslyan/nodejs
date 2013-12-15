var fs = require("fs");

module.exports = {
	
	save: function(picture, done) {
		fs.writeFile("output.jpeg", picture, 'base64', function(error) {
			console.log(error);
			done(error);
		});
	}
	
};
