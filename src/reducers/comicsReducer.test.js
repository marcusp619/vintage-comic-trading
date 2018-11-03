import {comics, isLoading, hasErrored } from './comics-reducers'

describe('comics reducer', () => {
  it('should return the initial state', () => {
    //setup 
    const expected = []

    //execution
    const result = comics(undefined, [])

    //expectation
    expect(result).toEqual(expected)
  })
})
