App.geolocation = {

	getLocation: function() {
		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
	},
	
	onSuccess: function(position) {
		var geolocation = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			altitude: position.coords.altitude,
			accuracy: position.coords.accuracy,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed,
			timestamp: position.timestamp,
		};
		
		App.locationService.saveLocation(geolocation, function(isSaved) {
			App.geolocation.displaySuccess(isSaved);
		});
	},
	
	displaySuccess: function(isSaved) {
		if (isSaved) {				
			alert('your geolocation information is saved to the server log file !');
		}
		else {
			alert('your geolocation information is NOT SAVED !!!');
		}
	},

	onError: function(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}
};

