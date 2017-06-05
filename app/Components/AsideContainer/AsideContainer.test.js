import React from 'react';
import ReactDOM from 'react-dom';
import AsideContainer from './AsideContainer';
import fetchMock from 'fetch-mock'
import { mount, shallow } from 'enzyme'

describe('AsideContainer', () => {

  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },1000)
    })
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AsideContainer />, div)
  })

  it(' starts with state as an empty string', () => {
    const wrapper = shallow(<AsideContainer />)
    const expectedState = {
      userInput: ''
    }

    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should set local state to the user input', () => {
    const wrapper = shallow(<AsideContainer />)
    const input = wrapper.find('input')
    const expectedState = {
      userInput: 'Denver, CO'
    }

    input.simulate('change', { target: { value: 'Denver, CO' } })

    expect(wrapper.state()).toEqual(expectedState)
  })

  xit('fires a returnSelection function with the data from state and sets the state back to empty strings', () => {
    const wrapper = shallow(<AsideContainer />)

    const expectedBeginState = {
      userInput: 'Denver, CO'
    }
    const expectedEndState = {
      district: ''
    }
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'Denver, CO' } })

    fetchMock.get('*', {status: 200})
    expect(wrapper.state()).toEqual(expectedBeginState)

    wrapper.find('.input-submit').simulate('click')
    expect(wrapper.state()).toEqual(expectedEndState)
  })

  it('should have an aside container that contains 7 decade buttons', () => {
    const wrapper = shallow(<AsideContainer />)
    const asideContainer = wrapper.find('#aside-container')
    const asideContainerChildren = asideContainer.node.props.children

    const buttonCount = asideContainerChildren.reduce((acc, obj) => {
      if(obj.type === 'button') {
        acc++
      }

      return acc
    }, 0)

    expect(buttonCount).toEqual(7)
  })

  // it('should return correct decade parameters on click of decade button', () => {
  //   const wrapper = shallow(<AsideContainer />)
  //   const ninetysBtn = wrapper.find('#ninetys-btn')
  //   const sim = ninetysBtn.simulate('click')
  //
  //   const result = wrapper.returnDecadeParams(ninetysBtn.simulate('click'))
  //   console.log(result);
  //
  // })
})
