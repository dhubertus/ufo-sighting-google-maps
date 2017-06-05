import { initialScrubber } from './initialScrubber.js'
import { nearScrubber } from './nearScrubber.js'
import { moonScrubber } from './moonScrubber.js'
import { weatherScrubber } from './weatherScrubber.js'

import stubbedData from './stubbedApiCall'
import stubbedNearData from './stubbedNearApiCall'
import moonPhaseStub from './moonPhaseStub'
import historicalWeatherStub from './historicalWeatherStub'

describe('initialScrubber', () => {

  test('should be a function', () => {
    expect(initialScrubber).toBeInstanceOf(Function)
  })

  test('should be an object', () => {
    expect(initialScrubber).toBeInstanceOf(Object)
  })

  test('returned value to be an object with a length of 50', () => {
    const result = Object.keys(initialScrubber(stubbedData))

    expect(result.length).toEqual(50)
  })
})

describe('nearScrubber', () => {

  test('should be a function', () => {
    expect(nearScrubber).toBeInstanceOf(Function)
  })

  test('should be an object', () => {
    expect(nearScrubber).toBeInstanceOf(Object)
  })

  test('returned value to be an object', () => {
    const result = Object.keys(nearScrubber(stubbedNearData))

    expect(result.length).toEqual(15)
  })
})

describe('moonScrubber', () => {

  test('should be a function', () => {
    expect(moonScrubber).toBeInstanceOf(Function)
  })

  test('should be an object', () => {
    expect(moonScrubber).toBeInstanceOf(Object)
  })

  test('returned value to be an object', () => {
    const result = Object.keys(moonScrubber(moonPhaseStub))

    expect(result.length).toEqual(1)
  })
})

describe('weatherScrubber', () => {

  test('should be a function', () => {
    expect(weatherScrubber).toBeInstanceOf(Function)
  })

  test('should be an object', () => {
    expect(weatherScrubber).toBeInstanceOf(Object)
  })

  test('returned value to be an object', () => {
    const result = Object.keys(weatherScrubber(historicalWeatherStub))

    expect(result.length).toEqual(5)
  })
})
