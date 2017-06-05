import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { NavBar } from './NavBar.js'
import fetch from 'isomorphic-fetch'

describe('NavBar', () => {
  it('should have to nav-link children', () => {
    const wrapper = shallow(<NavBar favorites={{}}/>)
    const linkContainerChildren = wrapper.find('#nav-bar').nodes[0].props.children

    const navLinkCount = linkContainerChildren.reduce((acc,obj) => {
      if(obj.props.className === 'nav-link') {
        acc++
      }
      return acc
    }, 0)

    expect(navLinkCount).toEqual(2)
  })

  it('should have 2 favorites if the user has favorited 2 sightings', () => {
    const wrapper = shallow(<NavBar favorites={{favOne: {sightingOne: 'one'}, favTwo:{sigthingTwo: 'two'}}}/>)

    const linkContainerChildren = wrapper.find('#nav-bar').nodes[0].props.children

    const favCount = linkContainerChildren[1].props.children[1].props.children

    expect(favCount).toEqual(2)

  })

  it('should have one nav link for favorites and for home', () => {
    const wrapper = shallow(<NavBar favorites={{}}/>)
    const linkContainerChildren = wrapper.find('#nav-bar').nodes[0].props.children

    const home = linkContainerChildren[0].props.to
    const favorites = linkContainerChildren[1].props.to

    expect(home).toEqual('/')
    expect(favorites).toEqual('/favorites')
  })
})
