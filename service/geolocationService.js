var fs = require('fs');

module.exports = {
	
	log: function(location, done) {	
		console.log(location);
		
		// This is a mistake, the service don't care about http code, it should return an error or nothing
		// To transfor an error to http code is responsability of controller, Service can be used from 
		// another place than a webservice, what http code 200 will mean then?
		// ex: done(); 
		// and if error
		// done("This is an error")
		done(200);
		
		// Another solution is to add a config object with onSucces and onError
		// config.onSucces()
		// or 
		// config.onError(error)
	}
	
};
