app.cameraService = {
	getPicture: function(config) { // Add an empty line before and after each function declaration
		navigator.camera.getPicture(
			function(picture) {
				config.onSuccess(picture);
			},
			
			function(error) {
				config.onError(error)
			},
			
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL
			}
		);
	}
};


