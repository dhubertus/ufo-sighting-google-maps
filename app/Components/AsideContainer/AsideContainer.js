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

    // this.props.searchInput()
  }

  render() {
    return (
      <div id='aside-container'>
        <h1>SearchBar</h1>
        <input type='text' value={this.state.userInput} placeholder='Enter City and State' onChange={(e) => this.handleUserInput(e)}/>
        <button onClick={() => this.returnSearchCoordinates(this.state.userInput)}>Search</button>
      </div>
    )
  }
}
