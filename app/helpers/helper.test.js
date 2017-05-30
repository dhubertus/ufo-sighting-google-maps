import { initialScrubber } from './initialScrubber.js'
import { nearScrubber } from './nearScrubber.js'

import stubbedData from './stubbedApiCall'
import stubbedNearData from './stubbedNearApiCall'

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
    expect(initialScrubber).toBeInstanceOf(Function)
  })

  test('should be an object', () => {
    expect(initialScrubber).toBeInstanceOf(Object)
  })

  test('returned value to be an object', () => {
    const result = Object.keys(nearScrubber(stubbedNearData))

    expect(result.length).toEqual(15)
  })
})
