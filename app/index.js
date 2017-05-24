import React, { Component } from 'react'
import { render } from 'react-dom'

import MapContainer from './Components/MapContainer/MapContainer'
import { HeaderContainer } from './Components/HeaderContainer/HeaderContainer'
import { AsideContainer } from './Components/AsideContainer/AsideContainer'
import { initialScrubber } from './helpers/initialScrubber.js'
import stubbedData from './helpers/stubbedApiCall.js'

class Root extends Component {
  componentDidMount() {
    // NOTE: INSERT API CALL TO YOUR INTERNAL API

  //     fetch( '/api/places', {
  //       method: 'GET'
  //     })
  //     .then(resp => resp.json())
  //     .then(obj => console.log(obj))

  const thing = initialScrubber(stubbedData)
  console.log(thing);
  }



  render() {
    return (
      <div id='app-container'>
        <HeaderContainer />
        <AsideContainer />
        <MapContainer
          mapElement={ <div className='mapelement' /> }
          containerElement={ <div className='containerElement' /> }/>
      </div>
    )
  }
}

render(<Root />, document.getElementById('main'))
