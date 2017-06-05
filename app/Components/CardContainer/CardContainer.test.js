import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { CardContainer } from './CardContainer.js'
import fetch from 'isomorphic-fetch'

describe('CardContainer', () => {
  
  it('should render instructions if no cards have been favorited', () => {
    const wrapper = mount(<CardContainer favorites={{}}/>)
    const instructions = wrapper.find('#no-favs').props().children

    expect(instructions).toEqual('Add Some Favorites')
  })

  it('should render two cards if two card has been favorited', () => {
    const wrapper = mount(<CardContainer favorites={{favOne:{favOne: 'one'}, favTwo:{favTwo: 'two'}}}/>)

    const containerLength = wrapper.find('#card-container').props().children.length
    expect(containerLength).toEqual(2)
  })
})
