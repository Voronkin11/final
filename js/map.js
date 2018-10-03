(function() {
	
	var mapElement = document.getElementById('map');
	var place = {
		lat: 49.070092,
		lng: 33.405736
	};
	
	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 17, 
			center: place
		}
	);

/*	var marker = new google.maps.Marker({
		position: place,
		map: map,
		icon: "img/map-marker.png"
	});*/
 
})();
