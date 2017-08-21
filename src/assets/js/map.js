var map;
var egglabs = new google.maps.LatLng(59.943358, 30.327866);
var mapCoordinates = new google.maps.LatLng(59.943358, 30.327866);


var markers = [];
var image = new google.maps.MarkerImage(
    'img-special.jpg',
    new google.maps.Size(26,34),
    new google.maps.Point(26,34),
    new google.maps.Point(26,34)
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false
      }));
      
}

function initialize() {
  var mapOptions = {
	backgroundColor: "#ffffff",
    zoom: 13,
	disableDefaultUI: true,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	styles: [
			  {
			    "featureType": "landscape.natural",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#OOO" }
			    ]
			  },
			  {
				    "featureType": "landscape.man_made",
				    "stylers": [
				      { "color": "#ooo" },
				      { "visibility": "off" }
				    ]
			  },
			  {
				    "featureType": "water",
				    "stylers": [
				       { "color": "#bbc3c6" },
				      { "saturation": 0 }
				    ]
			  },
			  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      { "color": "#cec3b1" }
				    ]
			  }
			 ,{
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      { "visibility": "off" }
				    ]
			  }
				,{
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#4c4a4b" }
				    ]
				  }
				
				,{
				    "featureType": "road.local",
				    "stylers": [
				      { "color": "#cec3b1" }
				    ]
				  }
				,{
				    "featureType": "road.local",
				    "elementType": "labels.text",
				    "stylers": [
				      { "color": "#cec3b1" }
				    ]
				  }
				,{
				    "featureType": "transit.station.bus",
				    "stylers": [
				      { "saturation": -57 }
				    ]
				  }
				,{
				    "featureType": "road.highway",
				    "elementType": "labels.icon",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  },{
				    "featureType": "poi",
				    "stylers": [
				      { "visibility": "off" }
				    ]
				  }
			
			]
    
  };
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
 
}
google.maps.event.addDomListener(window, 'load', initialize);