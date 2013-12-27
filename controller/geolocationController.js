var geolocationService = require('../service/geolocationService');

module.exports = {
	
	register: function(app) {
		// Prefer annonymous function, because like this log function will be called without scope and this will be null in it !
		app.post('/geolocation', this.log);
	},

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
