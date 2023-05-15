import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '220px',
};

const center = {
  lat: 22.57769,
  lng: 88.922783,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAeBjRkfSsywTZQIjapMQRcYsDgldO99Ok',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);

    map.setZoom(15);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      streetView={true}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} label={'Md Rubel Hamza'} title='SW/Eng' />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
