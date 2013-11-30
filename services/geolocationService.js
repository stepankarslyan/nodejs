var fs = require('fs');

// Can you export on object better than sunctions

exports.append = function(geolocation, done) {

	// I think i asked to symply log the location, why do you save to file? You mixed with the next work to save photo

	fs.appendFile('log/geolocationLog.txt', 'Date: ' + new Date() +' '+ JSON.stringify(geolocation), function (err) {
		if (err) throw err;
			done(true);
	});

};
