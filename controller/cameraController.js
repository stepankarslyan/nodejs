var cameraService = require('../service/cameraService');

module.exports = {

	save: function(req, res) {
		// Look to get the type of picture from request (jpg, bmp, png...)
		cameraService.save(req.body.picture, function(error) {	
			// Avoid this syntax and prefer standard with { ... }
			// Don't send error with http 200, but prefer using http meaningfull code 500
			// This force the client to check that the 200 is really a success
			if(error) res.send(error);
			res.send();
		});
	}
	
};
