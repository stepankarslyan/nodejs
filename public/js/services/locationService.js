{
		saveLocation: function(geolocation, done) {
			$.ajax({
				method: 'GET',
				url: '/location',
				data: geolocation,
				success: function(data) {
					done(data);
				}
			});
		}
	};
};
