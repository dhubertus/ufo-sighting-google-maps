import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { HeaderContainer } from './HeaderContainer.js'
import fetch from 'isomorphic-fetch'

describe('Header Container', () => {
  it('should render with a title of UFO Sightings', () => {
    const wrapper = shallow(<HeaderContainer />)
    const title = wrapper.find('h1').node.props.children

    expect(title).toEqual('UFO Sightings')
  })

  it('should have a nav bar container', () => {
    const wrapper = shallow(<HeaderContainer />)
    const navBar = wrapper.find('NavBar')

    expect(navBar.length).toEqual(1)
  })
})
