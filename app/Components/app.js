import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, Link, Switch } from 'react-router-dom';

import MapContainer from './MapContainer/MapContainer'
import AsideContainer from './AsideContainer/AsideContainer'
import { HeaderContainer } from './HeaderContainer/HeaderContainer'
import { initialScrubber } from '../helpers/initialScrubber.js'
import { nearScrubber } from '../helpers/nearScrubber.js'
import stubbedData from '../helpers/stubbedApiCall.js'
import { moonScrubber } from '../helpers/moonScrubber.js'
import { weatherScrubber } from '../helpers/weatherScrubber.js'
import { CardContainer } from './CardContainer/CardContainer'

 export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nearSightings: {},
      initialSightings: {},
      viewing: {},
      loading: true,
      favorites: {}
    }
  }

  componentWillMount() {

    this.handleRandomClick()
  }

  handleSameDay(year, month, day, history) {
    const nextDay = (parseInt(day) + 1).toString()

    this.setState({
      loading: true
    }, () => {
      fetch(`/api/sameDay?year=${year}&month=${month}&day=${day}&nextDay=${nextDay}`)
      .then((res) => res.json())
      .then((obj) => {
        const sameDay = initialScrubber(obj)

        // setTimeout(() => {
        this.setState({
          viewing: sameDay,
          loading: false
        })
        history.replace('/')
        // }, 1000)
      })

    })
  }

  handleInfoBox(uniquePin) {
    const sightings = this.state.viewing

    const newState = Object.keys(this.state.viewing).reduce((obj, key) => {
      if(key === uniquePin && sightings[key].info === 'false') {
      sightings[key].info = 'true'
    } else if ( key === uniquePin && sightings[key].info === 'true' ) {
      sightings[key].info = 'false'
    }
      Object.assign(obj, {[key] : sightings[key]})
      return obj
    }, {})

    this.setState({ viewing: newState })
  }

  handleFavorite(favKey) {
    const latitude = this.state.viewing[favKey].latitude
    const longitude = this.state.viewing[favKey].longitude
    const year = this.state.viewing[favKey].year
    const month = this.state.viewing[favKey].month
    const day = this.state.viewing[favKey].day
    const state = this.state.viewing[favKey].state
    const city = this.state.viewing[favKey].city
    let moonPhaseObj;
    let historicalWeatherObj;

    fetch(`https://api.usno.navy.mil/rstt/oneday?date=${month}/${day}/${year}&coords=${latitude},${longitude}&tz=1`)
    .then((res) => res.json())
    .then((obj) => {
      moonPhaseObj = moonScrubber(obj)
    })

    fetch(`https://api.wunderground.com/api/be16da1d1979f7aa/history_${year}${month}${day}/q/${state}/${city}.json`)
    .then((res) => res.json())
    .then((obj) => {
      historicalWeatherObj = weatherScrubber(obj)
      const newKeysObj = Object.assign(this.state.viewing[favKey], moonPhaseObj, historicalWeatherObj)
      const newState = Object.assign({}, this.state.favorites, {[favKey]: newKeysObj})

      this.setState({
        favorites: newState
      })
    })
  }

  handleDelete(id) {

    delete this.state.favorites[id]

    this.setState({
      favorites: this.state.favorites
    })
  }

  handleDecadeClick(lower, upper) {
    const randomNumber = Math.round(Math.random()*350)

    this.setState({ loading: true }, () => {
      fetch(`/api/range?lower=${lower}&upper=${upper}&randomNumber=${randomNumber}`, {
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

  handleRandomClick() {

    const randomNumber = Math.round(Math.random()*90000)

    this.setState({
      loading: true
    })

    fetch( `/api/places?randomNumber=${randomNumber}`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then((obj) => {
      const initialData = initialScrubber(obj)
      // console.log(this.props.history);
      setTimeout(() => {
        this.setState({ initialSightings: initialData,
                        viewing: initialData,
                        loading: false })
      }, 1000)
    })
    .catch(this.setState({
      viewing: 'Error'
    }))
  }


  render() {

    if(this.state.loading) {

      const randomNumber = Math.ceil(Math.random()*18)
      return (
        <div id='loading-container'>
          <img src={`../assets/styles/images/${randomNumber}.gif`}/>
          <div id='loading'>
            <p>Loading</p>
            <img src='../assets/styles/images/loading_dots.gif'/>
          </div>
        </div>
      )
    }

    return (
      <div id='app-container'>

        <HeaderContainer
          favorites={this.state.favorites}
        />

        <Route exact path='/' render={({history}) => (
          <div id='aside-map-container'>
            <AsideContainer
              searchInput={this.handleNearSearch.bind(this)}
              decadeClick={this.handleDecadeClick.bind(this)}
              randomClick={this.handleRandomClick.bind(this)}
            />
            <MapContainer
              mapElement={ <div className='mapelement' /> }
              containerElement={ <div className='containerElement'/> }
              sightings={this.state.viewing}
              clickInfoBox={this.handleInfoBox.bind(this)}
              loading={this.state.loading}
              favorite={this.handleFavorite.bind(this)}
            />
          </div>
        )}/>

        <Route exact path='/favorites' render={({history}) => (
          <CardContainer
            favorites={this.state.favorites}
            deleteFav={this.handleDelete.bind(this)}
            sameDay={this.handleSameDay.bind(this)}
            history={history}
          />
        )}/>

      </div>
    )
  }
}
