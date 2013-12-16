app.geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		app.geolocationService.getGeolocation({ // always put one empty line before and after function declaration
			onSuccess: function(position) { // Remove this empty line

				controller.sendGeolocation(position);	
			},
			
			onError: function(error) {
				controller.displayError(error);			
			}
			
		});	
	},

	sendGeolocation: function(position) {
		var controller = this;
		
		$.ajax({
			type: "POST",
			url: "/geolocation",
			
			data: {
				position: JSON.stringify(position)
			},
			
			success: function() {
				controller.displaySuccess("Your data is sent to the server!");
			},

			error: function(error) {
				controller.displayError({
					// Ins't there any text from error that could be displayed in place of this? static message?
					message: "There's some problems!",
					code: error.status
				});
			}
      
		});		     
	}, 
	
	displayError: function(error) {
		// If no format is asked stay simple, you can use
		// error.code + ' - ' + error.message
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	},
	
	displaySuccess: function(message) {
		alert(message);
	}
	
};
