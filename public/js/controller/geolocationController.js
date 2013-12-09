app.geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		app.geolocationService.getGeolocation({
		
			onSuccess: function(position) {
				
				// Why don't you simplify to something equivalent ?
				// controller.sendGeolocation(position.coords);
				// But you could simply send position too
				// controller.sendGeolocation(position);
				// Stay simple, don't adapt objects if noone asked for it
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

				controller.sendGeolocation(location);	
			},
			
			onError: function(error) {
				controller.displayError(error);			
			}
			
		});	
	},
	
	// You could send position directly
	sendGeolocation: function(location) {
		var controller = this;
		
		$.ajax({
			type: "POST",
			url: "/geolocation",
			data: { // data is on multiple line it's better to let a line before and after to help readers see the block of code
				location: JSON.stringify(location)
			},
			
			success: function() {
				controller.displaySuccess("Your data is sent to the server!");
			},

			// Don't use abbreviation, prefer error to err
			error: function(err) {
				controller.displayError({
					
					// Can you try to get the error message from server ?
					message: "There's some problems!",
					code: err.status
				});
			}
      
		});		     
	}, 
	
	displayError: function(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	},
	
	displaySuccess: function(message) {
		alert(message);
	}
	
};
