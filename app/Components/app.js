import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, Link, Switch } from 'react-router-dom';

import MapContainer from './MapContainer/MapContainer'
import AsideContainer from './AsideContainer/AsideContainer'
import { HeaderContainer } from './HeaderContainer/HeaderContainer'
import { initialScrubber } from '../helpers/initialScrubber.js'
import { nearScrubber } from '../helpers/nearScrubber.js'
import stubbedData from '../helpers/stubbedApiCall.js'

 export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nearSightings: {},
      initialSightings: {},
      viewing: {},
      loading: true
    }
  }

  componentWillMount() {
    // NOTE: INSERT API CALL TO YOUR INTERNAL API

    // fetch( '/api/places', {
    //   method: 'GET'
    // })
    // .then(resp => resp.json())
    // .then((obj) => {
    //    const initialData = initialScrubber(obj)
    //    console.log(initialData)
    //   this.setState({ initialSightings: initialData,
    //                   viewing: initialData,
    //                   loading: false})
    // })

    const thing = initialScrubber(stubbedData)
    console.log('scrubber check:',thing);
    const initialData = initialScrubber(stubbedData)
    setTimeout(() => {
      this.setState({ initialSightings: initialData,
                      viewing: initialData,
                      loading: false })
      // console.log(this)
    }, 2000)
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

  handleDecadeClick(lower, upper) {
    this.setState({ loading: true })
    fetch(`/api/range?lower=${lower}&upper=${upper}`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((obj) => {
      const scrubbedRange = initialScrubber(obj)
      setTimeout(() => {
        this.setState({ nearSightings: scrubbedRange,
                        viewing: scrubbedRange,
                        loading: false })
      }, 1000)
    })
  }


  handleNearSearch(lat, lng) {

    this.setState({ loading: true })
    fetch(`/api/near?lat=${lat}&lng=${lng}`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((obj) => {
      const scrubbedNear = nearScrubber(obj)
      setTimeout(() => {
        this.setState({ nearSightings: scrubbedNear,
                        viewing: scrubbedNear,
                        loading: false })
      }, 1000)
    })
  }


  render() {

    if(this.state.loading) {
      return (
        <div id='map-container'>
          <img src='../assets/styles/images/ETlight.gif'/>
          <p>...Loading</p>
        </div>
      )
    }

    return (
      <div id='app-container'>
        <HeaderContainer />
        <Route exact path='/' render={({history}) => (
          <div id='aside-map-container'>
          <AsideContainer
            searchInput={this.handleNearSearch.bind(this)}
            decadeClick={this.handleDecadeClick.bind(this)}
          />
          <MapContainer
            mapElement={ <div className='mapelement' /> }
            containerElement={ <div className='containerElement'/> }
            sightings={this.state.viewing}
            clickInfoBox={this.handleInfoBox.bind(this)}
            loading={this.state.loading}
          />
        </div>

        )}/>
      </div>
    )
  }
}

// render(<Root />, document.getElementById('main'))
