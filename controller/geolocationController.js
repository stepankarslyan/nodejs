var geolocationService = require('../service/geolocationService');

module.exports = {
	
	register: function(app) {
		var controller = this;
		app.post('/geolocation', controller.log);
	},
	
	log: function(req, res) {
		geolocationService.log(req.body.position, function(error) {
			if(error) {
				res.statusCode = 500;
				res.send(error);
			}
			else{
				res.send();
			}
		});
	}
	
};
