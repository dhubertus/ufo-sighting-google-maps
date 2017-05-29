import React from 'react'

import { withGoogleMap, GoogleMap, Marker, InfoWindow, MarkerClusterer } from 'react-google-maps'


const MapContainer = withGoogleMap(({ sightings, clickInfoBox }) => {
    const pinsArray = Object.keys(sightings).map((claim, i) => {
      return  <Marker
                key={i}
                position={{ lat: sightings[claim].latitude , lng: sightings[claim].longitude }}
                onClick={() => clickInfoBox(claim)}
                icon={'../../assets/styles/images/et.png'}
              >
                {sightings[claim].info === 'true' && (
                  <InfoWindow onCloseClick={()=> clickInfoBox(claim)}>
                    <div>
                      <div>{sightings[claim].summary}</div>
                      <a href={sightings[claim].url} target='_blank'>{'Read More'}</a>
                  </div>
                  </InfoWindow>
                )}
              </Marker>
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
