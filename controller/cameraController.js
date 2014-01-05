var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {
		var controller = this;
		app.post('/pictures', controller.save);
	},
	
	save: function(req, res) {
		cameraService.save(req.body.picture, function(error) {
			if(error) {
				res.statusCode = 500;
				res.send(error);
			}
			else{
				response.setHeader("Picture saved successly", 200);
				// No need for message 200 means it's ok but there are http code 200 that are more precise
				// 201, 202... search one with more meaning than simple 200
				res.send();			
			}
		});
	}
	
};
