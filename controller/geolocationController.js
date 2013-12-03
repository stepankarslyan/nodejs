var geolocationService = require('../service/geolocationService');

exports.location = {
	
	save: function(req, res) {
		var location = JSON.parse(req.body.location);
		console.log(location);
	
		geolocationService.log.appendToFile(location, function(isSaved) {
			res.send(isSaved);
		});
	
	}
};
