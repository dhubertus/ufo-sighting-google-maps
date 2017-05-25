import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const MapContainer = withGoogleMap(({ sightings, openInfoBox }) => {

    const pinsArray = Object.keys(sightings).map((claim, i) => {
      return <Marker
                key={i}
                position={{ lat: sightings[claim].latitude , lng: sightings[claim].longitude }}
                onClick={() => openInfoBox()}
              />
    })

  return (
    <div id='map-container'>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat:39.8282 , lng: -98.5795 }}>
      {pinsArray}
    </GoogleMap>
  </div>
  )
})

export default MapContainer
