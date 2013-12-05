var geolocationService = require('../service/geolocationService');

// The same than service use same name than file if you name the object
// Use the syntax module.exports = {};

exports.location = {
	
	// The service log so use verb log not save
	save: function(req, res) {
		var location = JSON.parse(req.body.location);
		console.log(location);
	
		// This is not needed but if needed change the export to have syntax
		// geolocationService.log(location, function() {...});
		geolocationService.log.appendToFile(location, function(isSaved) {
			res.send(isSaved);
		});
	
	}
};
