app.geolocationService = {

	getGeolocation: function(config) { // Don't let the first line of code in function empty, there is no need to let empty line around a single line of code spread on some lines in file if there is only this line of code in the function
	
		navigator.geolocation.getCurrentPosition(
			function(position) {
				config.onSuccess(position);
			},
			function(error) {
				config.onError(error);
			}
		);	
	}
	
};
