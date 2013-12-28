// YOU FORGOT TO CORRECT AFTER CODE REVIEW OF THIS FILE !!!
var cameraService = require('../service/cameraService');

module.exports = {
	
	register: function(app) {
		// Use Rest, you are not adding a camera but a picture
		// It would be better to post on /pictures
		app.post('/camera', this.save);
		
		// Add a function to get back a picture on url /pictures/id
	},
	
	save: function(req, res) {
		cameraService.save(req.body.picture, function(error) {
			if(error) {
				res.statusCode = 500;
				res.send(error);
			}
			
			// Look the http codes, it's possible to put a create 200 status code and a property in response header telling a reference to the saved picture
			res.send();
		});
	}
	
};
