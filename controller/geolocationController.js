var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		var location = JSON.parse(req.body.location);
		console.log(location);
	
		geolocationService.log(location, function(isSaved) {
			// Don't use boolean to tell if succeed, but in REST use http code 200 or 500
			res.send(isSaved);
		});	
	}
	
};
