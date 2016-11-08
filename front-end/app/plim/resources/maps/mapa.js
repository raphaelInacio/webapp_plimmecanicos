var geocoder;
var map;
var marker;
var image_client = 'http://plimmecanicos.com.br/resources/images/maps/icon-client.png';
var directionsDisplay;
var directionsService;

function initialize() {
    // Create the autocomplete object, restricting the search
    // to geographical location types.
    autocomplete = new google.maps.places.Autocomplete( /** @type {HTMLInputElement} */ (document.getElementById('autocomplete')), {
    	types: ['geocode']
    });
    // When the user selects an address from the dropdown,
    // populate the address fields in the form.
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
    	fillInAddress();
    });

    var latlng = new google.maps.LatLng(-23.5478819, -46.6452132);

    var options = {
    	zoom: 10,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    directionsService = new google.maps.DirectionsService();

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
    	map: map,
    	draggable: true,
    });

    directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    directionsDisplay.setPanel(document.getElementById("trajeto-texto"));

    marker.setPosition(latlng);

    setMarkers(map);
}

function setMarkers(map) {

	var image = {
		url: 'http://plimmecanicos.com.br/resources/images/maps/icon-mecanica.png',

	};

	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
	var count = 1;

	for (var i = 0; i < oficinasJSON["data"].item.length; i++) {
		count++;
        //var myLatLng = ;
        var marker = new google.maps.Marker({
        	position: new google.maps.LatLng(oficinasJSON["data"].item[i]["Latitude"], oficinasJSON["data"].item[i]["Longitude"]),
        	map: map,
        	icon: image,
            // shape: shape,
            title: oficinasJSON["data"].item[i]["nome"],
            zIndex: i,
            animation: google.maps.Animation.DROP
        });

        var emailOficina = oficinasJSON["data"].item[i]["email"];
        var content = '<div class="text-center"> <h4 class="thin" style="color: #2687e9;"> <strong> ' + oficinasJSON["data"].item[i]["nome"] + '</strong>  </h4>' + '<p style="color: #2687e9;"> <strong>' + oficinasJSON["data"].item[i]["email"] + '</strong> </p>' + '<p><strong>' + oficinasJSON["data"].item[i]["telefone"] + '</strong></p>' + '<p><strong>' + oficinasJSON["data"].item[i]["endereco"] + '</strong></p>' + '<button type="button" data-loading-text="Oficina Selecionada" class="btn btn-success"  onclick=\'selecionarOficina(\"'+emailOficina+'\");\'> Selecionar Oficina </button>  </div>';

        setInfoWindow(content, marker, map);
    }

}

function setInfoWindow(content, marker, map) {

	var infowindow = new google.maps.InfoWindow({
		shadowStyle: 1,
		content: content,
		maxWidth: 350,
		padding: 0,
		backgroundColor: 'rgb(57,57,57)',
		borderRadius: 5,
		arrowSize: 10,
		borderWidth: 1,
		borderColor: '#2c2c2c',
		disableAutoPan: true,
		hideCloseButton: true,
		arrowPosition: 30,
		backgroundClassName: 'transparent',
		arrowStyle: 2
	});

    // Exibir texto ao clicar no pin;
    google.maps.event.addListener(marker, 'click', function () {
    	infowindow.open(map, marker);
    });
}

$(document).ready(function () {

	initialize();

	function carregarNoMapa(endereco) {
		geocoder.geocode({
			'address': endereco + ', Brasil',
			'region': 'BR'
		}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0]) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();

					$('#autocomplete').val(results[0].formatted_address);
					$('#txtLatitude').val(latitude);
					$('#txtLongitude').val(longitude);

					var location = new google.maps.LatLng(latitude, longitude);
					marker.setPosition(location);
					marker.setIcon(image_client);
					map.setCenter(location);
					map.setZoom(15);
				}
			}
		})
	}

	function calcRoute(start, end, distance, duration) {

		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.DRIVING
		};

		directionsService.route(request, function (result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(result);
                directionsDisplay.setPanel(document.getElementById("trajeto-texto")); // Aqui faço a definição
            }
        });


	}



	function calculateDistances(origin) {
		var cordenates = [];
		var destination;
		for (var i = 0; i < oficinasJSON["data"].item.length; i++) {
			if (i < 25) {
				destination = new google.maps.LatLng(oficinasJSON["data"].item[i]["Latitude"], oficinasJSON["data"].item[i]["Longitude"]);
				cordenates[i] = destination;
			}
		}

		var service = new google.maps.DistanceMatrixService();

		service.getDistanceMatrix({
			origins: [origin],
			destinations: cordenates,
			travelMode: google.maps.TravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.METRIC,
			avoidHighways: false,
			avoidTolls: false
		}, callback);
	}


	function callback(response, status) {
		if (status == google.maps.DistanceMatrixStatus.OK) {
			var origins = response.originAddresses;
			var destinations = response.destinationAddresses;
			var rotaMinima;
			var distanceMin = 9000000;
			var distance;
			var duration;

			for (var i = 0; i <= origins.length; i++) {

				var results = response.rows[i].elements;

				for (var j = 0; j <= results.length; j++) {

					var element = results[j];

					if ((j + 1) < results.length && results[j + 1].status === "OK" && results[j].status === "OK") {

						var element2 = results[j + 1];

						console.log(element.distance.value);

						if (element.distance.value < distanceMin) {
							distanceMin = element.distance.value;
							rotaMinima = destinations[j];
							distance = element.distance.text;
							duration = element.duration.text;
						}

					}

                    // var distance = element.distance.text;
                    // var duration = element.duration.text;
                    // var from = origins[i];
                    // var to = destinations[j];
                }

                calcRoute(origins[i], rotaMinima, distance, duration);
            }

        }
    }
    $("#autocomplete").click(function () {
    	if ($(this).val() != "") carregarNoMapa($("#autocomplete").val());
    })

    $("#autocomplete").blur(function () {
    	if ($(this).val() != "") carregarNoMapa($(this).val());
    })

    google.maps.event.addListener(marker, 'drag', function () {
    	geocoder.geocode({
    		'latLng': marker.getPosition()
    	}, function (results, status) {
    		if (status == google.maps.GeocoderStatus.OK) {
    			if (results[0]) {
    				$('#autocomplete').val(results[0].formatted_address);
    				$('#txtLatitude').val(marker.getPosition().lat());
    				$('#txtLongitude').val(marker.getPosition().lng());
    			}
    		}
    	});
    });

    $("form").submit(function (event) {
    	event.preventDefault();

    	var endereco = $("#autocomplete").val();
    	var latitude = $("#txtLatitude").val();
    	var longitude = $("#txtLongitude").val();

    	var latingStart = new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude));
    	calculateDistances(latingStart);
    });
});