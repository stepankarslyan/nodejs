app.cameraController = {

	getPicture: function() {
		var controller = this;
	
		app.cameraService.getPicture({
		
			onSuccess: function(picture) {
				controller.sendToServer(picture);
			},
			
			onError: function(error) {
				controller.displayError(error);
			}
			
		});
	},
	
	sendToServer: function(picture) {
		var controller = this;
		
		$.ajax({
			url: '/camera',
			type: 'POST',
			
			data: {
				picture: picture
			},
			success: function() {
				controller.displaySuccess("picture saved on server successly");
			},
			
			error: function(error) {
				controller.displayError(eror);
			}
			
		});
	},
	
	displaySuccess: function(message) {
		alert(message);
	},
	
	displayError: function(error) {
		// Try to stay standard and use the same kind of display in all you code
		// use error.code + ' - ' + error.message
		alert("error: " + error);
	}
	
};
