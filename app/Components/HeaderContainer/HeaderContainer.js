import React from 'react'
import { NavBar } from '../NavBar/NavBar'

export const HeaderContainer = ({ favorites }) => {
  return (
    <div id='header-container'>
      <h1 id='title'>UFO Sightings</h1>
      <NavBar
        favorites={ favorites }
      />
    </div>
  )
}
