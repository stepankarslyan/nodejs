var geolocationService = require('../services/geolocationService');

exports.saveGeolocation = function(req, res) {
	
	var geolocation = JSON.parse(req.body.location);
	console.log(geolocation);
	
	geolocationService.make.appending(geolocation, function(isSaved) {
		res.send(isSaved);
	});
	
};
