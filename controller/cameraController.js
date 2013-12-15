var cameraService = require('../service/cameraService');
module.exports = {
	save: function(req, res) {
		var picture = req.body.picture;
		
		cameraService.save(picture, function(error) {	
			if(error) res.send(error);
			res.send();
		});
	}
};
