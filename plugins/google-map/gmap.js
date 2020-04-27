function init_map() {

  const lat = parseFloat($('#map_canvas').attr('data-latitude'));
  const lng = parseFloat($('#map_canvas').attr('data-longitude'));
  const map_marker = $('#map_canvas').attr('data-marker');
  const map_marker_name = $('#map_canvas').attr('data-marker-name');
  const location = {
          lat: lat,
          lng: lng
        };

  const map_options = {
    center: location,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 5,
    panControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControl: false,
    fullscreenControl: false
  }

  const map = new google.maps.Map(document.getElementById('map_canvas'), map_options);
  const pin_icon = new google.maps.MarkerImage(map_marker, null, null, null, new google.maps.Size(30, 50));

  marker = new google.maps.Marker({
     position: location,
     map: map,
     icon: pin_icon,
     title: map_marker_name,
   });
}

const map = document.getElementById('map_canvas');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', init_map);
}