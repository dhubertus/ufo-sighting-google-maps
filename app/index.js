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
    this.state = {
      nearSightings: {},
      initialSightings: {},
      viewing: {}
    }
  }

  componentWillMount() {
    // NOTE: INSERT API CALL TO YOUR INTERNAL API

    // fetch( '/api/places', {
    //   method: 'GET'
    // })
    // .then(resp => resp.json())
    // .then((obj) => {
    //    const initialData = initialScrubber(stubbedData)
    //   this.setState({ initialSightings: initialData,
    //                   viewing: initialData })
    // })

    const thing = initialScrubber(stubbedData)
    console.log('scrubber check:',thing);
    const initialData = initialScrubber(stubbedData)
    this.setState({ initialSightings: initialData,
                    viewing: initialData })
  }

  handleInfoBox(uniquePin) {
    // receive id that is associated with the clicked pin
    const sightings = this.state.viewing

    //map through state.sightings.keys to find the matching id
      //using the key toggle this objects info key from false to true
    const newState = Object.keys(this.state.viewing).reduce((obj, key) => {
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
    this.setState({ viewing: newState })
  }


  handleNearSearch(lat, lng) {
    fetch(`/api/near?lat=${lat}&lng=${lng}`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((obj) => {
      const scrubbedNear = nearScrubber(obj)
      this.setState({ nearSightings: scrubbedNear,
                      viewing: scrubbedNear })
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
          sightings={this.state.viewing}
          clickInfoBox={this.handleInfoBox.bind(this)}
        />
      </div>
    )
  }
}

render(<Root />, document.getElementById('main'))
