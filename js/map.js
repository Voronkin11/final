(function() {
	'use strict'

	/*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
*/

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
