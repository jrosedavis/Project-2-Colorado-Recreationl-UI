var nps_co = [
    {
      name: "Rocky Mountain National Park",
      location: [40.3611, -105.6967]
    },
    {
      name: "Great Sand Dunes National Park",
      location: [37.7815, -105.6280]
    },
    {
      name: "Black Canyon of the Gunnison National Park",
      location: [38.8514, -107.7250]
    },
    {
      name: "Mesa Verde National Park",
      location: [37.2434, -108.4597]
    }
  ];

  var nationalParks = [];
  
  for (var i = 0; i < nps_co.length; i++) {
    // loop through the cities array, create a new marker, push it to the cityMarkers array
    nationalParks.push(
      L.marker(nps_co[i].location).bindPopup("<h4>" + nps_co[i].name + "</h4>")
    );
  }
  
  // Add all the cityMarkers to a new layer group.
  // Now we can handle them as one group instead of referencing each individually
  var npsLayer = L.layerGroup(nationalParks);
  
  // Define variables for our tile layers
  var street = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });
  
  var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  var satelite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
  });

  var nav = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/navigation-night-v1",
    accessToken: API_KEY
  });
  
  // Only one base layer can be shown at a time
  var baseMaps = {
    Street: street,
    Dark: dark,
    Satelite: satelite,
    Navigation: nav,
  };
  
  // Overlays that may be toggled on or off
  var overlayMaps = {
    Parks: npsLayer
  };

  var map = L.map("map", {
    center: [
      39.5501, -105.7821
    ],
    zoom: 7,
    layers: [street, npsLayer]
  });
  
  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps).addTo(map);
