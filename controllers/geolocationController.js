var geolocationService = require('../services/geolocationService');

exports.saveGeolocation = function(req, res) {
	
	var geolocation = req.query;
	
	geolocationService.append(geolocation, function(isSaved) {
		
		// Of if you want to return boolean why not simply
		// res.send(isSaved);
		// you can use simply saved or even done
		
		if (isSaved) {
			res.send(true);
		}
		else {
			res.send(false);
		}
	});
	
};
