var app = {

	bootstrap: function() {
		this.geolocationController.getGeolocation();
	},
	
	takePhoto: function() {
		this.cameraController.getPicture();
	}
	
};

