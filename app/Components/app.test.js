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
      },2000)
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

  it('renders a loading page before the api call returns', () => {
    const wrapper = shallow(<Root />)
    const loadingState = wrapper.state().loading

    expect(loadingState).toEqual(true)

    const loadingContainer = wrapper.find('#loading-container')
    expect(loadingContainer.length).toEqual(1)
  })

  it('has a loading container that holds an img(gif) and loading div that has a two items in it', () => {
    const wrapper = shallow(<Root />)
    const loadingContainerImg = wrapper.find('#loading-container').props().children[0].type

    expect(loadingContainerImg).toEqual('img')

    const loadingAnimation = wrapper.find('#loading').props().children
    expect(loadingAnimation.length).toEqual(2)
  })

  it('should return error if it does not fetch initial sightings', () => {
    fetchMock.get('begin:/api/places?randomNumber=' , {
        status: 500,
      })

    const wrapper = mount(<Root />)

    expect(wrapper.state('viewing')).toEqual('Error')
  })

  it('should set objects in state if it retrieves the initial sightings', async () => {
    const body = initialScrubber(stubbedApiCall)
    // fetchMock.get('begin:/api/places?randomNumber=' , {
    //     status: 200,
    //     body: body
    //   })

    // fetchMock.get('*', {status: 200})
    const wrapper = mount(<Root />)

    await waitingFunc()


    const viewingLength = Object.keys(wrapper.state('viewing')) //.length

    console.log(viewingLength)

    expect(viewingLength).toEqual(10)
  })

  xit('should be able to add a sighting to favorites', async () => {
    fetchMock.get('begin:/api/places?randomNumber=' , {
        status: 200,
      })
    const wrapper = mount(<Root />)

    await waitingFunc()
    // console.log(wrapper.state());
    const favBtn = wrapper.find('.favorite-btn')
    // console.log(favBtn);
  })

  xit('has one HeaderContainer', async () => {
    const body = initialScrubber(stubbedApiCall)

    fetchMock.get('*' , {
      status: 200,
      body: body
    })
    const wrapper = mount(<Root />)
    await waitingFunc()
    console.log(wrapper.state());
    // console.log(wrapper.nodes[0].props.children);
  })
})
