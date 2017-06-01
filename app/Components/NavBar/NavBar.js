import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {

  return (
    <div>
      <NavLink
        activeClassName='selected'
        to='/'>Home</NavLink>
      <NavLink
        activeClassName='selected'
        to='/favorites'>Favorites</NavLink>
    </div>
  )
}
