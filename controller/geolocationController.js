var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		var location = JSON.parse(req.body.location);	
		
		geolocationService.log(location, function(statusCode) {
			res.send(statusCode);
		});	
	}
	
};
