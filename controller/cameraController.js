var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {
		var controller = this;
		app.post('/pictures', controller.save);
	},
	
	save: function(req, res) {
		cameraService.save({picture: req.body.picture, 
			onSuccess: function(id) {
					res.setHeader('/pictures/' + id, 201);
					res.send();			
			},
			
			onError: function(error) {
					res.statusCode = 500;
					res.send(error);
			}
		
		});
	}
	
};
