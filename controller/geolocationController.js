var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		geolocationService.log(req.body.position, function(error) {
			if(error) {
				res.statusCode(500);
				
				// you can send the json of the error object to bring more information to client
				// than simply dry error
				res.send();
			}
			res.send();
		});	
	}
	
};
