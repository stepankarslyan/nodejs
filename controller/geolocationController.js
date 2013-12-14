var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		geolocationService.log(req.body.position, function() {
			
			res.send();
			
		});	
	}
	
};
