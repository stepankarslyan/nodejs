var geolocationService = require('../services/geolocationService');

exports.saveGeolocation = function(req, res) {
	
	var geolocation = req.query;
	
	geolocationService.append(geolocation, function(isSaved) {
		if (isSaved) {
			res.send(true);
		}
		else {
			res.send(false);
		}
	});
	
};
