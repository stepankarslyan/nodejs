var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {

		app.post('/pictures', function(req, res) {
		
			cameraService.save(req.body.picture, function(error) {
				if(error) {
					res.statusCode = 500;
					res.send(error);
				}
				response.setHeader("Picture saved successly", 200); //it's this  you want ?
				res.send();
			});
			
		});
	/*
	i let this code in comment because for now i dont have needed code in CameraService, and mongodb
		app.get('/pictures/id', function(req, res) {
			
			cameraService.get(req.query.id, function(error, picture) {
				if(error) {
					res.setHeader("Picture not found", 404);
					res.send(error)
				}
				else{
					res.send(picture);
				}
			});
			
		});
	*/
	}
	
};
