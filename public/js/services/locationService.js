// No you mixed the meaning of service, it's responsible of getting location not to send it to server


var locationService = {

	saveLocation = function(geolocation, done) {
		$.ajax({
			method: 'GET',
			url: '/location',
			data: geolocation,
			success: function(data) {
				alert('your location is saved to the server log file !')
			}
		});
	};

};

