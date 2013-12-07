app.geolocationController = {

	getLocation: function() {
		// As i told to Stopik, you must be carefull with function scope
		// Putting function in variable or parameter the function will be called
		// whitout scope and "this" will be null for this reason it's better to use anonymous function
		app.geolocationService.getLocation(this.onSuccess, this.onError);
		
		// This have the second interest to remove onSucces and onError that have no meaning 
		// for geolocationController
		/*
		var controller = this;
		
		app.geolocationService.getLocation(function(position) {
			controller.sendToServer(position);
		}, function(error) {
			controller.displayError(error);
		});
		*/
	},
	
	onSuccess: function(position) {
		// This is not usefull and could be replaced by
		// var location = position.coords;
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

	// Change to displayError, don't put onError function on a controller that have no meaning prefer the use of 
	// anonymous function that call the controller function, this remove the risk of function call with no scope
	onError: function(error) {
		alert('code: ' + error.code + ' message: ' + error.message);
	},
	
	// Take directly position as parameter
	sendToServer: function(location) {
		$.ajax({
			url: 'geolocation',
			method: 'POST',
			data: {
				// Replace by
				// location: JSON.stringify(position.location)
				location: JSON.stringify(location)
			},
			
			// Don't use isSaved boolean to tell success or error,
			// prefer http code, like 200 ok 500 Error
			// then you can use jquery error handler
			success: function(isSaved) {
				// Don't use full namespace, it's better to use a variable before ajax call
				// var controller = this;
				// and use controller.displaySuccess
				app.geolocationController.displaySuccess(isSaved);
			}
		});
	},
	
	// Use it to display success only not error is isSaved is false
	// if you have an error use displayError 
	displaySuccess: function(isSaved) {
		if (isSaved) {				
			alert('your geolocation information is saved to the server log file !');
		}
		else {
			alert('your geolocation information is NOT SAVED !!!');
		}
	}
};

