(function() {
	
	var mapElement = document.getElementById('map');
	var place = {
		lat: 49.070378,
		lng: 33.405373
	};
	
	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 16, 
			center: place
		}
	);

/*	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: "img/map-marker.png"
	});*/
 
})();
