var fs = require('fs');

module.exports = {
	
	log: function(location, done) {
		fs.appendFile('log/locationLog.txt', this.formatLocationLog(location) , function(err) {
			if (err) done(501);
			done(200);
		});
	},
	
	formatLocationLog: function(location) {
		var date = 'Date: ' + new Date();
		return '\n' + date + '\n' + JSON.stringify(location);
	}
	
};
