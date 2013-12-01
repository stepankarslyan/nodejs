var fs = require('fs');

exports.make = {

	appending: function(geolocation, done) {
		fs.appendFile('log/geolocationLog.txt', '\n' + 'Date: ' + new Date() +' '+ JSON.stringify(geolocation), function(err) {
			if (err) throw err;
				done(true);
		});
	}	
};
