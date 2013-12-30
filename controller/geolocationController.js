var geolocationService = require('../service/geolocationService');

module.exports = {
	
	register: function(app) {
		// Register is registering empty function that simply call controller functions
		// Don't put all code in function register that's not object  !!!
		app.post('/geolocation', function(req, res) {
		
			geolocationService.log(req.body.position, function(error) { // No need for empty line before if it's first line of function and after if it's last line of function
				// Prefer patern config with params and onSuccess and onFailure
				
				if(error) {
					res.statusCode = 500;
					res.send(error);
				} // Put one else
				res.send();
			});
				
		});
	},

};
