mapboxgl.accessToken = '';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jorgepires/cloowe2l1005201r7c6ky1hy7',
  center: [-73.97590919999838, 40.76114132897463],
  zoom: 15.6,
  maxZoom: 15.6,
  minZoom: 15.6,
  bearing: 28.9,
  cooperativeGestures: true
});
// disable map rotation using right click + drag
map.dragRotate.disable();
map.scrollZoom.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();
map.on('load', () => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.addSource('building', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-73.97597341977526, 40.76119507260012] /*TL*/ ,
            [-73.9755887312299, 40.76103551470911] /*TR*/ ,
            [-73.97576038067612, 40.76079571741266] /*BR*/ ,
            [-73.9761454767534, 40.76095644258055] /*BL*/ ,

          ]
        ]
      }
    }
  });
  // Add a new layer to visualize the polygon.
  map.addLayer({
    'id': 'building-fill',
    'type': 'fill',
    'source': 'building', // reference the data source
    'layout': {},
    'paint': {
      'fill-color': '#B6957D',
      'fill-opacity': 1
    }
  });

  // Rockfeller center blocks
  map.addSource('rf1', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-73.97996048488666, 40.76050535946072] /*TL*/ ,
            [-73.97677030926438, 40.75917251711837] /*TR*/ ,
            [-73.97721611764159, 40.75857000340628] /*BR*/ ,
            [-73.98038867186752, 40.75991685163481] /*BL*/ ,

          ]
        ]
      }
    }
  });
  // Add a new layer to visualize the polygon.
  map.addLayer({
    'id': 'rf1',
    'type': 'fill',
    'source': 'rf1', // reference the data source
    'layout': {},
    'paint': {
      'fill-color': '#f2e7c7', // blue color fill
      'fill-opacity': .5
    }
  });
  map.addSource('rf2', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-73.98041002667524, 40.75988748936575] /*TL*/ ,
            [-73.97723611309925, 40.75853787046424] /*TR*/ ,
            [-73.97767078157472, 40.75793257029568] /*BR*/ ,
            [-73.980852631587, 40.75928056460475] /*BL*/ ,

          ]
        ]
      }
    }
  });
  // Add a new layer to visualize the polygon.
  map.addLayer({
    'id': 'rf2',
    'type': 'fill',
    'source': 'rf2', // reference the data source
    "name": "Rockefeller Center",
    'layout': {},
    'paint': {
      'fill-color': '#f2e7c7', // blue color fill
      'fill-opacity': .5
    }
  });
  map.addSource('rf3', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-73.9808737810887, 40.75925128172145] /*TL*/ ,
            [-73.97769185703183, 40.757903466433135] /*TR*/ ,
            [-73.97812274642025, 40.75730222988369] /*BR*/ ,
            [-73.98131373031458, 40.75864762453958] /*BL*/ ,

          ]
        ]
      }
    }
  });


  // Add a new layer to visualize the polygon.
  map.addLayer({
    'id': 'rf3',
    'type': 'fill',
    'source': 'rf3', // reference the data source
    'layout': {},
    'paint': {
      'fill-color': '#f2e7c7', // blue color fill
      'fill-opacity': .5
    }
  });

  map.addSource('680label', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-73.97588025423686, 40.76097415399528]
        },
        'properties': {
          'title': '680'
        }
      }]
    }
  });

  // Add a symbol layer
  map.addLayer({
    'id': '680label',
    'type': 'symbol',
    'source': '680label',
    'layout': {
      'text-field': ['get', 'title'],
      'text-font': [
        'PT Serif Regular'
      ],
      'text-size': 16,
      'text-anchor': 'top',
      'text-offset': [0, -.7],
    },
    'paint': {
      'text-color': '#FFFFFF',
    }
  });
  map.addSource('rflabel', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
            -73.97898000557528, 40.75893603358139
          ]
        },
        'properties': {
          'title': 'Rockefeller Center'
        }
      }]
    }
  });

  // Add a symbol layer
  map.addLayer({
    'id': 'rflabel',
    'type': 'symbol',
    'source': 'rflabel',
    'layout': {
      'text-field': ['get', 'title'],
      'text-font': [
        'PT Serif Regular'
      ],
      'text-anchor': 'top'
    },
    'paint': {
      'text-color': '#ba9779',
    }
  });
  /* Subway markers */
  map.loadImage(
    'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/img/subway-mta-e-f.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage('mtaEF', image);

      // Add a data source containing one point feature.
      map.addSource('mtaEF', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-73.9761526798502, 40.7605610040948]
            }
          }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'mtaEF',
        'type': 'symbol',
        'source': 'mtaEF', // reference the data source
        'layout': {
          'icon-image': 'mtaEF', // reference the image
          'icon-size': .5
        }
      });
    }
  );
  map.loadImage(
    'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/img/subway-mta-n-r-w.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage('mtaNRW', image);

      // Add a data source containing one point feature.
      map.addSource('mtaNRW', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-73.9729761542567, 40.76470170015557]
            }
          }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'mtaNRW',
        'type': 'symbol',
        'source': 'mtaNRW', // reference the data source
        'layout': {
          'icon-image': 'mtaNRW', // reference the image
          'icon-size': .5
        }
      });
    }
  );
  map.loadImage(
    'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/img/subway-mta-b-d-f-m.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage('mtaBDFM', image);

      // Add a data source containing one point feature.
      map.addSource('mtaBDFM', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-73.98067471663381, 40.75957838062257]
            }
          }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'mtaBDFM',
        'type': 'symbol',
        'source': 'mtaBDFM', // reference the data source
        'layout': {
          'icon-image': 'mtaBDFM', // reference the image
          'icon-size': .5
        }
      });
    }
  );
  map.loadImage(
    'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/img/subway-mta-f-m.png',
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      map.addImage('mtaFM', image);

      // Add a data source containing one point feature.
      map.addSource('mtaFM', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-73.97734226690487, 40.7640971382541]
            }
          }]
        }
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        'id': 'mtaFM',
        'type': 'symbol',
        'source': 'mtaFM', // reference the data source
        'layout': {
          'icon-image': 'mtaFM', // reference the image
          'icon-size': .5
        }
      });
    }
  );
  /* All map marker data/layer/pop up */
  map.addSource('all', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/neighborhood-locations.json'
  });
  map.addLayer({
    'id': 'all',
    'type': 'circle',
    'source': 'all',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'circle-radius': 7,
      'circle-color': [
        'match',
        ['get', 'location'],
        'Retail', '#B6957D',
        'Restaurants', '#D5AC3B',
        'Hotels', '#76543A',
        "#FFFF00"
      ],
      'circle-stroke-color': "rgba(255, 255,255, .5)",
      'circle-stroke-width': 1,
    }
  });
  map.on('mouseenter', 'all', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML('<h6>' + name + '</h6>').addTo(map);
  });
  map.on('mouseleave', 'all', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  /* Restaurant map marker data/layer/pop up */
  map.addSource('restaurants', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/neighborhood-locations-restaurants.json'
  });
  map.addLayer({
    'id': 'restaurants',
    'type': 'circle',
    'source': 'restaurants',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-radius': 7,
      'circle-color': '#D5AC3B',
      'circle-stroke-color': "rgba(255, 255, 255, .5)",
      'circle-stroke-width': 1,
    }
  });
  map.on('mouseenter', 'restaurants', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML('<h6>' + name + '</h6>').addTo(map);
  });
  map.on('mouseleave', 'restaurants', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  /* Retail map marker data/layer/pop up */
  map.addSource('retail', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/neighborhood-locations-retail.json'
  });
  map.addLayer({
    'id': 'retail',
    'type': 'circle',
    'source': 'retail',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-radius': 7,
      'circle-color': '#B6957D',
      'circle-stroke-color': "rgba(255, 255,255, .5)",
      'circle-stroke-width': 1,
    }
  });
  map.on('mouseenter', 'retail', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML('<h6>' + name + '</h6>').addTo(map);
  });
  map.on('mouseleave', 'retail', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  /* Hotel map marker data/layer/pop up */
  map.addSource('hotels', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: 'https://stg680.wpenginepowered.com/wp-content/themes/680fifth/map/neighborhood-locations-hotel.json'
  });
  map.addLayer({
    'id': 'hotels',
    'type': 'circle',
    'source': 'hotels',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-radius': 7,
      'circle-color': '#76543A',
      'circle-stroke-color': "rgba(255, 255,255, .5)",
      'circle-stroke-width': 1,
    }
  });
  map.on('mouseenter', 'hotels', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML('<h6>' + name + '</h6>').addTo(map);
  });
  map.on('mouseleave', 'hotels', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  map.resize(); /* Fit map to container */
});
// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
  if (!map.getLayer('all') || !map.getLayer('retail') || !map.getLayer('restaurants') || !map.getLayer('hotels')) {
    return;
  }
  // Enumerate ids of the layers.
  const toggleableLayerIds = ['all', 'retail', 'restaurants', 'hotels'];
  // Set up the corresponding toggle button for each layer.
  for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
    if (document.getElementById(id)) {
      continue;
    }
    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
    link.className = (id == "all") ? 'active' : '';


    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {

      const clickedLayer = this.textContent;
      //alert(clickedLayer);
      e.preventDefault();
      e.stopPropagation();

      const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
      );
      if (map.getLayoutProperty(id, 'visibility') === 'visible') {
        link.className = 'active';
      }

      // Toggle layer visibility by changing the layout object's visibility property.
      if (visibility == 'visible' || visibility == undefined) {
        toggleableLayerIds.forEach(toggleOff)
        //this.className = '';
      } else {
        this.className = 'active';
        toggleableLayerIds.forEach(toggleOff)
        map.setLayoutProperty(
          clickedLayer,
          'visibility',
          'visible'
        );

      }

      function toggleOff(item, index, arr) {
        if (item != clickedLayer) {
          map.setLayoutProperty(item, 'visibility', 'none');
          document.getElementById(item).classList.remove('active');
        }
      }
    };


    const layers = document.getElementById('menu');
    layers.appendChild(link);
  }
});
