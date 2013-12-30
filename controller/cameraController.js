var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {

		app.post('/camera', function(req, res) {
		
			cameraService.save(req.body.picture, function(error) {
				if(error) {
					res.setHeader("Picture not saved", 500);
					res.send(error);
				}
			
				response.setHeader("Picture saved successly", 200);
				res.send();
			});
			
		});
	/*	
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
