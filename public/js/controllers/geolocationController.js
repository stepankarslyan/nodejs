app.geolocationController = {

	getLocation: function() {
		app.geolocationService.getLocation(this.onSuccess, this.onError);
	},
	
	onSuccess: function(position) {
		var location = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			altitude: position.coords.altitude,
			accuracy: position.coords.accuracy,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed,
			timestamp: position.timestamp,
		};
		app.geolocationController.sendToServer(location);
	},

	onError: function(error) {
		alert('code: ' + error.code + ' message: ' + error.message);
	},
	
	sendToServer: function(location) {
		$.ajax({
			url: 'geolocation',
			method: 'POST',
			data: {
				location: JSON.stringify(location)
			},
			success: function(isSaved) {
				app.geolocationController.displaySuccess(isSaved);
			}
		});
	},
	
	displaySuccess: function(isSaved) {
		if (isSaved) {				
			alert('your geolocation information is saved to the server log file !');
		}
		else {
			alert('your geolocation information is NOT SAVED !!!');
		}
	}
};

