var send = function(showMyLocation) {
	$.ajax({
		type: "GET",
		url: "/location",
		data: showMyLocation,
		success: function(dataType) {
			$("#geolocation").html(dataType);
		}
	});
};
