var fs = require('fs');

// As you export only one object by file use
// module.exports = {};
// http://nodejs.org/api/modules.html#modules_module_exports

// Object name should not be a verb, and the name of object is the name of file
// log -> geolocationService
exports.log = {
	
	// log should be the name of this method
	appendToFile: function(location, done) {
		fs.appendFile('log/locationLog.txt', this.buildData(location) , function(err) {
			if (err) throw err;
			done(true);
		});
	},
	
	// build data is too abstract, why not more descriptive formatLocationLog
	buildData: function(location) {
		var date = 'Date: ' + new Date();
		return '\n' + date + '\n' + JSON.stringify(location);
	}
	
};
