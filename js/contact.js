      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.3368533,21.9154000),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		var marker = new google.maps.Marker({
		map:map,
		draggable:true,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(43.3366579,21.9154702)
		});		
		google.maps.event.addListener(marker, 'click', toggleBounce);	
      }
	  
	  function toggleBounce() {

			if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
	  }
