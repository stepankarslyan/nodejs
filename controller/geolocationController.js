var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log:function(req, res) {
		var location = req.body.location;
		geolocationService.log(location, function() {
			res.send();
		});	
	}
};
