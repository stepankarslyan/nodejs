var fs = require('fs');

module.exports = {
	
	log: function(position, done) {	
		console.log(position);
		done();
	}
	
};
