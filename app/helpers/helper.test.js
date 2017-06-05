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

  test('object includes the proper keys', () => {
    const scrubbed = initialScrubber(stubbedData)
    const result = Object.keys(scrubbed)
    const singleObj = scrubbed[result[2]]
    const keys = Object.keys(singleObj)

    const latitude = keys.includes('latitude')
    const longitude = keys.includes('longitude')
    const summary = keys.includes('summary')

    expect(latitude).toEqual(true)
    expect(longitude).toEqual(true)
    expect(summary).toEqual(true)
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

  test('object includes the proper keys', () => {
    const scrubbed = nearScrubber(stubbedNearData)
    const result = Object.keys(scrubbed)
    const singleObj = scrubbed[result[8]]
    const keys = Object.keys(singleObj)

    const latitude = keys.includes('latitude')
    const longitude = keys.includes('longitude')
    const summary = keys.includes('summary')

    expect(latitude).toEqual(true)
    expect(longitude).toEqual(true)
    expect(summary).toEqual(true)
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

  test('object includes the proper keys', () => {
    const scrubbed = moonScrubber(moonPhaseStub)
    const result = Object.keys(scrubbed)
    const moonPhase = result.includes('moonPhase')

    expect(moonPhase).toEqual(true)
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

  test('object includes the proper keys', () => {
    const scrubbed = weatherScrubber(historicalWeatherStub)
    const result = Object.keys(scrubbed)

    const humidity = result.includes('humidity')
    const temperature = result.includes('temperature')
    const visibility = result.includes('visibility')

    expect(humidity).toEqual(true)
    expect(temperature).toEqual(true)
    expect(visibility).toEqual(true)
  })
})
