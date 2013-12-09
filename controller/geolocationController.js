var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log: function(req, res) {
		var location = JSON.parse(req.body.location);	
		
		// Status code do not come from service, the controller should decide to send 200 if success
		// and 500 if error (an object with code and message for example)
		// prefer something like
		/*
		geolocationService.log({
			location: location,
			
			onSuccess: function() {
				res.send();
			},
			
			onError: function(error) {
				res.statusCode = 500;
				res.send(JSON.stringify(error));
			}
			
		});
		*/
		geolocationService.log(location, function(statusCode) {
			res.send(statusCode);
		});	
	}
	
};
