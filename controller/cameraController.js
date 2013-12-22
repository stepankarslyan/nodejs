var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {
		app.post('/camera', cameraController.save);
	},
	
	save: function(req, res) {
		cameraService.save(req.body.picture, function(error) {
			if(error) {
				res.statusCode = 500;
				res.send(error);
			}
			res.send();
		});
	}
	
};
