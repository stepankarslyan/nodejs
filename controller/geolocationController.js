var geolocationService = require('../service/geolocationService');

module.exports = {

	log: function(req, res) {
		geolocationService.log(req.body.position, function(error) {
			if(error) {
				res.statusCode = 500;
				res.send(error);
			}
			res.send();
		});	
	}
	
};
