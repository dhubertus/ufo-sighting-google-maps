import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'
import Root from './app'
import fetch from 'isomorphic-fetch'

import stubbedApiCall from '../helpers/stubbedApiCall'
import { initialScrubber } from '../helpers/initialScrubber.js'

describe('Root', () => {
  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },3000)
    })
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    fetchMock.get('*', {status: 200})
    ReactDOM.render(<Root />, div)
  })

  it('should return error if it does not fetch initial sightings', () => {
    fetchMock.get('begin:/api/places?randomNumber=' , {
        status: 500,
      })

    const wrapper = mount(<Root />)

    expect(wrapper.state('viewing')).toEqual('Error')
  })

  xit('should set objects in state if it retrieves the initial sightings', async () => {
    const body = initialScrubber(stubbedApiCall)
    fetchMock.get('begin:/api/places?randomNumber=' , {
        status: 200,
        body: body
      })

    // fetchMock.get('*', {status: 200})
    const wrapper = mount(<Root />)

    await waitingFunc()


    expect(wrapper.state('viewing')).toEqual({})
  })

  // it('should be able to add a sighting to favorites', async () => {
  //   fetchMock.get('begin:/api/places?randomNumber=' , {
  //       status: 200,
  //     })
  //   const wrapper = mount(<Root />)
  //
  //   await waitingFunc()
  //   // console.log(wrapper.state());
  //   const favBtn = wrapper.find('.favorite-btn')
  //   // console.log(favBtn);
  // })

  xit('has one HeaderContainer', async () => {
    // fetchMock.get('begin:/api/places?randomNumber=' , {
    //   status: 200,
    // })
    const wrapper = mount(<Root />)
    await waitingFunc()
    // console.log(wrapper.state());
    // console.log(wrapper.nodes[0].props.children);
  })





})
