var geolocationService = require('../service/geolocationService');

module.exports = {
	
	register: function(app) {
		app.post('/geolocation', function(req, res) {
		
			geolocationService.log(req.body.position, function(error) {
				if(error) {
					res.setHeader("Geolocation not saved", 500);
					res.send(error);
				}
				res.send();
			});
				
		});
	},

};
