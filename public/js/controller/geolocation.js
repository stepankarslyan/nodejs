app.geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		app.geolocationService.getGeolocation({
		
			onSuccess: function(position) {
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
      url: "/location",
      
      success: function() {
	      controller.displaySuccess("Your data is sent to the server!");
      },
       
      error: function() {
	      controller.displayError({
	        message: "There's some problems!",
	        code: ""
	      });
      }
      
    });		     
	}, 
	
	displayError: function(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	},
	
	displaySuccess: function(message) {
	  alert(message);
	}
	
};
