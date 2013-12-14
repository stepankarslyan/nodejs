var cameraService = require('./service/cameraService');
module.exports = {
	save: function(req, res) {
		var picture = req.body.picture;
		
		cameraService.save(picture, function() {
		
			res.send();
		
		});
	}
};
