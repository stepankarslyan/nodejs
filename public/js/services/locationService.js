
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

