var cameraService = require('../service/cameraService');

module.exports = {

	save: function(req, res) {
		cameraService.save(req.body.picture, function(error) {	
			if(error) res.send(error);
			res.send();
		});
	}
	
};
