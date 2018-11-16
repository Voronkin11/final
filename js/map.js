(function() {
	'use strict'
	var mapElement = document.getElementById('map');
	var place = {
		lat: 49.070551,
		lng: 33.405282
	};

	
	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 16, 
			center: place
		}
	);

	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: "img/map-marker.png",
		title: "IT Place"
	});

	var info = new google.maps.InfoWindow({
		content: '<h4>Здесь проходят курсы от Beetroot Academy</h4>'
	});
 	
 	marker.addListener('click', function() {
 		info.open(mapElement, marker);
 	});
})();
