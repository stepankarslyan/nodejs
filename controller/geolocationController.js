var geolocationService = require('../service/geolocationService');

module.exports = {
	
	log:function(req, res) { // use same convention log: function...
		var position = req.body.position; // the use of variable here is not necessary as you use it only one time
		geolocationService.log(position, function() { // when one line of code is on some lines in file add an empty line before and after
			res.send();
		});	
	} // let one line before and after each function
};

// If i'm not mistaken we talked about managing possible error of service and transformed in http code 200 or 500 in controller
// please add this management, if we change the service later and have to send error we will have to change all code using this service
