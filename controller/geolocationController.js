var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		var location = JSON.parse(req.body.location);
		console.log(location);
	
		geolocationService.log(location, function(isSaved) {
			res.send(isSaved);
		});	
	}
	
};
