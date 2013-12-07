var fs = require('fs');

module.exports = {
	
	log: function(location, done) {
	
		fs.appendFile('log/locationLog.txt', this.formatLocationLog(location) , function(err) {
<<<<<<< HEAD
			if (err) done(501);
			done(200);
=======
			// Don't use exceptions "throw" in javascript
			if (err) throw err;
			done(true);
>>>>>>> c7f5e574b6fb2795eb04c56e8263d6d5f499769b
		});
	},
	
	formatLocationLog: function(location) {
		var date = 'Date: ' + new Date();
		return '\n' + date + '\n' + JSON.stringify(location);
	}
	
};
