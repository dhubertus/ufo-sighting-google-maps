import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {
  const favCount = Object.keys(props.favorites).length

  return (
    <div id='nav-bar'>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/'>Home</NavLink>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/favorites'>Favorites<span id='fav-count'>{favCount}</span></NavLink>
    </div>
  )
}
