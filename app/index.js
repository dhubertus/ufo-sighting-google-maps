import React, { Component } from 'react'
import { render } from 'react-dom'

import MapContainer from './Components/MapContainer/MapContainer'
import AsideContainer from './Components/AsideContainer/AsideContainer'
import { HeaderContainer } from './Components/HeaderContainer/HeaderContainer'
import { initialScrubber } from './helpers/initialScrubber.js'
import { nearScrubber } from './helpers/nearScrubber.js'
import stubbedData from './helpers/stubbedApiCall.js'

class Root extends Component {
  constructor(props) {
    super(props)
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
    // .then((obj) => {
    //   this.setState({sightings: initialScrubber(obj)})
    // })

    const thing = initialScrubber(stubbedData)
    console.log('scrubber check:',thing);
    this.setState({sightings: initialScrubber(stubbedData)})

  }

  handleInfoBox(uniquePin) {
    // receive id that is associated with the clicked pin
    const sightings = this.state.sightings

    //map through state.sightings.keys to find the matching id
      //using the key toggle this objects info key from false to true
    const newState = Object.keys(this.state.sightings).reduce((obj, key) => {
      if(key === uniquePin && sightings[key].info === 'false') {
      sightings[key].info = 'true'
    } else if ( key === uniquePin && sightings[key].info === 'true' ) {
      sightings[key].info = 'false'
    }
    //return all other non matched as they were (info key still false)
      Object.assign(obj, {[key] : sightings[key]})
      return obj
    }, {})

    //set state to result from above
    this.setState({
      sightings: newState
    })
  }

  //NOTE: '/api/near?lat=393&long=493' <-- to transfer data to BE request
  handleNearSearch(lat, lng) {
    fetch(`/api/near?lat=${lat}&lng=${lng}`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((obj) => {
      this.setState({ sightings: nearScrubber(obj)})
    })
  }




  render() {
    return (
      <div id='app-container'>
        <HeaderContainer />
        <AsideContainer
          searchInput={this.handleNearSearch.bind(this)}
        />
        <MapContainer
          mapElement={ <div className='mapelement' /> }
          containerElement={ <div className='containerElement'/> }
          sightings={this.state.sightings}
          clickInfoBox={this.handleInfoBox.bind(this)}
        />
      </div>
    )
  }
}

render(<Root />, document.getElementById('main'))
