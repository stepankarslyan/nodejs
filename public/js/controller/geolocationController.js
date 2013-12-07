app.geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		app.geolocationService.getGeolocation({
		
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
				
				controller.sendGeolocation(location);	
			},
			
			onError: function(error) {
				controller.displayError(error);			
			}
			
		});	
	},
	
	sendGeolocation: function(location) {
		var controller = this;
		
		$.ajax({
      type: "POST",
      url: "/geolocation",
      data: {
      	location: JSON.stringify(location)
      },
      success: function() {
	      controller.displaySuccess("Your data is sent to the server!");
      },
       
      error: function(err) {
	      controller.displayError({
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

