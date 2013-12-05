app.geolocationService = {

	getLocation: function(onSuccess, onError) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);	
	} // Add one empty line before and after function
};
