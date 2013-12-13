var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log:function(req, res) {
		var position = req.body.position;
		geolocationService.log(position, function() {
			res.send();
		});	
	}
};
