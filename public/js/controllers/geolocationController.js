// Why this space? And why not an object ?
	var showMyLocation = function() {
	
		// Ok you stay glued on the copy paste code !!! Prefer object style coding
		// Create an object with meaning full method names 
		// ex:
		// geolocationService.getLocation({
		//   onSuccess: function(geolocation) {
		//     this.sendGeocationToServer(geolocation);
		//   },
		//   orError: function(error) {
		//     this.displayError(error);
		//   }
		// });
	
	
		var onSuccess = function(position) {
			
			// This shoudl be in service
			var geolocation = { // One general rule, when one line of code is splited in many lines in the file you should let one space before and after
				Latitude: position.coords.latitude, // name of properties do not start with capital letter !!!! Is it class ???
				Longitude: position.coords.longitude,
				Altitude: position.coords.altitude,
				Accuracy: position.coords.accuracy,
				AltitudeAccuracy: position.coords.altitudeAccuracy,
				Heading: position.coords.heading,
				Speed: position.coords.speed,
				Timestamp: position.timestamp,
			};
		
			$.ajax({
				method: 'GET', // Try to follow REST, get is to read informations, to send informations use PUT or POST
				url: '/geolocation',
				data: geolocation, // Prefer a json object with some properties than plain data
				// Avoid sending potentially long datas by get !!!!
				success: function(data // give meaningfull name to variables, don't call data if it is a boolean telling saved !!! and prefer an object with properties it will be easier to add properties without chnging much code) {
					notify(data); // Don't put functions in variable, use object coding
					// ex: this.displaySuccess();
				}
			});
			var notify = function(isSaved) {
				if (isSaved) {				
					alert('your geolocation information is saved to the server log file !');
				}
				else {
					alert('your geolocation information is NOT SAVED !!!');
				}
			};
		};

		var onError = function(error) {
				alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError); // This should be in service
	};
	showMyLocation();
