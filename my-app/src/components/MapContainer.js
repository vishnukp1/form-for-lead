import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapContainer = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 37.7749, 
    longitude: -122.4194,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken=""
      onViewportChange={(newViewport) => setViewport(newViewport)}
    />
  );
};

export default MapContainer;
