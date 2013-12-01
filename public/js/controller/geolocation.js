var geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		geolocationService.getGeolocation({
		
			onSuccess: function(position) {
				controller.sendGeolocation(position);	
			},
			
			onError: function(error) {
				controller.displayError(error);			
			}
			
		});	
	},
	
	sendGeolocation: function(position) {
			geolocationService.sendGeolocation(data);
	}, 
	
	displayError: function(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}
	
};
