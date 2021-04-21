var map = L.map('map',{
}).setView([39.5501, -105.7821], 7);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

var geojsonFeature = [{
    "type": "Feature",
    "properties": {
        "popupContent": "Grand Sand Dunes National Park"
        },
    "geometry": {
        "type": "Point",
        "coordinates": [
         -105.62805175781249,
        37.78156937014928
        ]
    }
},{
    "type": "Feature",
    "properties": {
      "popupContent": "Rocky Mountain National Park"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.69671630859375,
        40.361195540839
      ]
    }
},{
    "type": "Feature",
    "properties": {
        "popupContent": "Black Canyon of the Gunnison National Park"
      },
    "geometry": {
        "type": "Point",
        "coordinates": [
          -107.72506713867186,
          38.58145263504284
        ]
      }
},{
    "type": "Feature",
    "properties": {
        "popupContent": "Mesa Verde National Park"
      },
    "geometry": {
        "type": "Point",
        "coordinates": [
          -108.45977783203125,
          37.243448378654115
        ]
      }
}];

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
//Icon layer option available, however can't figure out why it disables popupContent
function createIcon (feature, latlng){
    var myIcon = L.icon({
        iconUrl: "https://img.icons8.com/ios-filled/64/000000/compass--v2.png",
        iconSize: [35, 25],
});
    return L.marker(latlng, {icon:myIcon});
};

var layerOptions = {
    pointToLayer: createIcon
}
//Icon layer option

L.geoJSON(geojsonFeature,{
    onEachFeature:onEachFeature
}).addTo(map);




/////////////////

var map = L.map("map", {
    center: [
      39.5501, -105.7821
    ],
    zoom: 7,
  });

var lay1 = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

//Geojson information for NPS
var geojsonFeature = [{
    "type": "Feature",
    "properties": {
        "popupContent": "Grand Sand Dunes National Park"
        },
    "geometry": {
        "type": "Point",
        "coordinates": [
         -105.62805175781249,
        37.78156937014928
        ]
    }
},{
    "type": "Feature",
    "properties": {
      "popupContent": "Rocky Mountain National Park"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.69671630859375,
        40.361195540839
      ]
    }
},{
    "type": "Feature",
    "properties": {
        "popupContent": "Black Canyon of the Gunnison National Park"
      },
    "geometry": {
        "type": "Point",
        "coordinates": [
          -107.72506713867186,
          38.58145263504284
        ]
      }
},{
    "type": "Feature",
    "properties": {
        "popupContent": "Mesa Verde National Park"
      },
    "geometry": {
        "type": "Point",
        "coordinates": [
          -108.45977783203125,
          37.243448378654115
        ]
      }
}];

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
//Icon layer option available, however can't figure out why it disables popupContent
function createIcon (feature, latlng){
    var myIcon = L.icon({
        iconUrl: "https://img.icons8.com/ios-filled/64/000000/compass--v2.png",
        iconSize: [35, 25],
});
    return L.marker(latlng, {icon:myIcon});
};

var layerOptions = {
    pointToLayer: createIcon
}
//Icon layer option

L.geoJSON(geojsonFeature,{
    onEachFeature:onEachFeature
}).addTo(map);

//create a function layer for legend

///html///
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Geo JSON</title>

  <link rel="icon1" type="image/png" href="https://icons8.com/icon/Lcoa9tnTFcSd/compass">

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin="" />>

  <!--D3 cdn-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js"></script>
  <!-- Our CSS -->
  <link rel="stylesheet" type="text/css" href="static/css/style.css">
  
</head>

<body>
  <!-- The div where we will inject our map -->
  <div id="map"></div>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>
  <!--json-->
  <script src="static/js/geo.json"></script>
  <!-- API key -->
  <script type="text/javascript" src="static/js/config.js"></script>
  <!-- Our JS -->
  <script type="text/javascript" src="static/js/logic.js"></script>
</body>
</html>
