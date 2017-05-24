import React, { Component } from 'react'
import { render } from 'react-dom'

import MapContainer from './Components/MapContainer/MapContainer'
import { HeaderContainer } from './Components/HeaderContainer/HeaderContainer'
import { AsideContainer } from './Components/AsideContainer/AsideContainer'
import { initialScrubber } from './helpers/initialScrubber.js'
import stubbedData from './helpers/stubbedApiCall.js'

class Root extends Component {
  constructor() {
    super()
    this.state={
      sightings: {}
    }
  }
  componentWillMount() {
    // NOTE: INSERT API CALL TO YOUR INTERNAL API

      // fetch( '/api/places', {
      //   method: 'GET'
      // })
      // .then(resp => resp.json())
      // .then(obj => this.setState({sightings: initialScrubber(stubbedData)}))

  const thing = initialScrubber(stubbedData)
  console.log('scrubber check:',thing);
  this.setState({sightings: initialScrubber(stubbedData)})
  }



  render() {
    return (
      <div id='app-container'>
        <HeaderContainer />
        <AsideContainer />
        <MapContainer
          mapElement={ <div className='mapelement' /> }
          containerElement={ <div className='containerElement'/> }
          sightings={this.state.sightings}
        />
      </div>
    )
  }
}

render(<Root />, document.getElementById('main'))
