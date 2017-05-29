import React, { Component } from 'react'

export default class AsideContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value })
  }
////https://maps.googleapis.com/maps/api/geocode/json?address=patterson%20ny&key=AIzaSyDMTYgcP9OWXVhOAHRow8CEhZ-FyUKtO4Y
  returnSearchCoordinates(search) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDMTYgcP9OWXVhOAHRow8CEhZ-FyUKtO4Y`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((obj) => {
      const lat = obj.results[0].geometry.location.lat
      const lng = obj.results[0].geometry.location.lng
      this.props.searchInput(lat, lng)
      this.setState({ userInput: '' })
    })
  }

  returnDecadeParams(e) {
    const bottomParam = parseInt(e.target.innerHTML.slice(0,4))

    let upperParam;

    if (bottomParam === 2000) {
      upperParam = bottomParam + 16
    } else {
      upperParam = bottomParam + 9
    }

    this.props.decadeClick(bottomParam, upperParam)
  }

  render() {
    return (
      <div id='aside-container'>
        <h1>SearchBar</h1>
        <input type='text' value={this.state.userInput} placeholder='Enter City and State' onChange={(e) => this.handleUserInput(e)}/>
        <button onClick={() => this.returnSearchCoordinates(this.state.userInput)}>Search</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>2000's</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>1990's</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>1980's</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>1970's</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>1960's</button>
        <button onClick={(e) => this.returnDecadeParams(e)}>1950's</button>
      </div>
    )
  }
}
