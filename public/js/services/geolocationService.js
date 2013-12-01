app.geolocationService = {

	getLocation: function(onSuccess, onError) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);	
	}
};
