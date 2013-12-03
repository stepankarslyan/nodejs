var fs = require('fs');

exports.log = {
	
	appendToFile: function(location, done) {
		fs.appendFile('log/locationLog.txt', this.buildData(location) , function(err) {
			if (err) throw err;
			done(true);
		});
	},
	
	buildData: function(location) {
		var date = 'Date: ' + new Date();
		return '\n' + date + '\n' + JSON.stringify(location);
	}
	
};
