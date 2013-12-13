var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log:function(req, res) {
		var location = req.body.position;
		geolocationService.log(location, function() {
			res.send();
		});	
	}
};
