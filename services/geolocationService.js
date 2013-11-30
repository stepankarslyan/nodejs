var fs = require('fs');
exports.append = function(geolocation, done) {

	fs.appendFile('log/geolocationLog.txt', 'Date: ' + new Date() +' '+ JSON.stringify(geolocation), function (err) {
		if (err) throw err;
			done(true);
	});

};
