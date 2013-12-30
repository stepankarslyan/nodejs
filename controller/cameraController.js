var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {

		app.post('/pictures', function(req, res) {
			// The annonymous function must only be used to call the controller functions
			// Not to put code in it !!!
			// Imagine if you register 20 functions this will be 200 line that is unreadable !!!
			cameraService.save(req.body.picture, function(error) {
				if(error) {
					res.statusCode = 500;
					res.send(error);
				}
				
				// Put a else
				response.setHeader("Picture saved successly", 200); //it's this  you want ?
				// No need for message 200 means it's ok but there are http code 200 that are more precise
				// 201, 202... search one with more meaning than simple 200
				res.send();
			});
			
		});
		
		// Don't let any comment, if you need you can look git history !!!
		
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
