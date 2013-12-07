var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		var location = JSON.parse(req.body.location);
		console.log(location);
	
<<<<<<< HEAD
		geolocationService.log(location, function(statusCode) {
			res.send(statusCode);
=======
		geolocationService.log(location, function(isSaved) {
			// Don't use boolean to tell if succeed, but in REST use http code 200 or 500
			res.send(isSaved);
>>>>>>> c7f5e574b6fb2795eb04c56e8263d6d5f499769b
		});	
	}
	
};
