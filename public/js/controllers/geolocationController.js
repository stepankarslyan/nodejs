	var showMyLocation = function() {
	
		var onSuccess = function(position) {
			var geolocation = {
				Latitude: position.coords.latitude,
				Longitude: position.coords.longitude,
				Altitude: position.coords.altitude,
				Accuracy: position.coords.accuracy,
				AltitudeAccuracy: position.coords.altitudeAccuracy,
				Heading: position.coords.heading,
				Speed: position.coords.speed,
				Timestamp: position.timestamp,
			};
		
			$.ajax({
				method: 'GET',
				url: '/geolocation',
				data: geolocation,
				success: function(data) {
					notify(data);
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
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	};
	showMyLocation();
