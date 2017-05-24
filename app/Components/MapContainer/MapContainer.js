import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


//ref={ props.onMapLoad }
// { props.markers && renderSingleMarker(props.markers) }
//{ props.destinations.length && renderAllMarkers(props.destinations) }
//onClick={(event) => props.addMarker && props.addMarker(event)}>
const MapContainer = withGoogleMap(() => {
  return (
    <div id='map-container'>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat:39.8282 , lng: -98.5795 }}>
    </GoogleMap>
  </div>
  )
})

export default MapContainer
