var geolocationService = {

	getGeolocation: function(config) {
		navigator.geolocation.getCurrentPosition(function(position) {
			config.onSuccess(position);
		}, function(error) {
			config.onError(error);
		});
	},
	
	sendGeolocation: function(data) {
		$.ajax(config);
		var config = {
			type: "GET",
			url: "/index.html",
			success: function() {
				document.write("Your data is sent to the server!");
			},
			error: function() {
				alert("There's some problems!");
			}
		};
	}
	
};
