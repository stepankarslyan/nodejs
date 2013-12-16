var fs = require('fs');

module.exports = {
	
	log: function(location, done) {
		fs.appendFile('log/locationLog.txt', this.formatLocationLog(location) , function(err) {
			// The server can be called out of a http request context, the http code 200 or 501 have no meaning
			// for service, this is controller responsability
			// service just tell that there was an error, controller decide what to do with error
			// In general prefer the patern config with onSuccess and onError
			if (err) done(501); // Don't use this syntax, use { ... }
			done(200);
		});
	},
	
	formatLocationLog: function(location) {
		var date = 'Date: ' + new Date();
		return '\n' + date + '\n' + JSON.stringify(location);
	}
	
};
