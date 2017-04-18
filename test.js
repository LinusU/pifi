/* eslint-env mocha */

'use strict'

const pifi = require('./')

const assert = require('assert')
const assertRejects = require('assert-rejects')

describe('pifi', () => {
  it('should resolve with result', () => {
    return pifi(cb => cb(null, 10)).then((result) => {
      assert.strictEqual(result, 10)
    })
  })

  it('should reject with error', () => {
    const promise = pifi(cb => cb(new Error('test')))

    return assertRejects(promise, /test/)
  })

  it('should use custom promise constructor', () => {
    let constructorCalled = 0

    class P {
      constructor (fn) {
        constructorCalled += 1
        fn(() => undefined, () => undefined)
      }
    }

    const promise = pifi(cb => cb(null, true), P)

    assert.ok(promise instanceof P)
    assert.strictEqual(constructorCalled, 1)
  })
})
