import React from 'react'

import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


const MapContainer = withGoogleMap(({ sightings, clickInfoBox, loading, favorite }) => {
    const pinsArray = Object.keys(sightings).map((claim, i) => {
      return  <Marker
                key={i}
                position={{ lat: sightings[claim].latitude , lng: sightings[claim].longitude }}
                onClick={() => clickInfoBox(claim)}
                icon={'../../assets/styles/images/et.png'}
              >
                {sightings[claim].info === 'true' && (
                  <InfoWindow onCloseClick={()=> clickInfoBox(claim)}>
                    <div className='window-div'>
                      <div>{sightings[claim].summary}</div>
                      <div className='window-btns'>
                        <a className='read-more' href={sightings[claim].url} target='_blank'>Read More</a>
                        <button className='favorite-btn' onClick={() => favorite(claim)}>Favorite</button>
                      </div>
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
