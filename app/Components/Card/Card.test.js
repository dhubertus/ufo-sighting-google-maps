import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import { Card } from './Card.js'
import fetch from 'isomorphic-fetch'

describe('Card', () => {
  it('should render a card with the date', () => {
    const wrapper = shallow(<Card month={'01'} day={'01'} year={'2017'} />)

    const date = wrapper.find('h5').props().children
    expect(date).toEqual('01/01/2017')
  })

  it('should render a card with the location', () => {
    const wrapper = shallow(<Card city={"Denver"} state={'CO'} summary={'It was weird'}/>)

    const location = wrapper.find('h3').props().children
    expect(location).toEqual('Denver, CO')
  })

  it('should render a card with a table, and a delete button', () => {
    const wrapper = shallow(<Card />)

    const table = wrapper.find('table')
    expect(table.length).toEqual(1)

    const button = wrapper.find('.delete-btn')
    expect(button.length).toEqual(1)
  })

  it('should fire a delete function on click of the delete button', () => {
    const mockDelete = jest.fn()
    const wrapper = shallow(<Card deleteFav={mockDelete} />)
    const button = wrapper.find('.delete-btn')

    button.simulate('click')

    expect(mockDelete).toHaveBeenCalledTimes(1)
  })
})
