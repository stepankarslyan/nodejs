App.locationService = {

	saveLocation: function(geolocation, done) {
		$.ajax({
			method: 'POST',
			url: '/geolocation',
			data: {
				geolocation: JSON.stringify(geolocation)
			},
			success: function(isSaved) {
				done(isSaved);
			}
		});
	}
	
};
