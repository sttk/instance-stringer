'use string'

/* global describe it */
/* eslint quotes: "off" */

const instanceStringer = require('../')
const chai = require('chai')
const expect = chai.expect
const semver = require('semver')

describe('Tests for only nodejs', () => {

  it('Should output an instance normally even if it contains properties ' +
  '\n\twhich cannot be converted to primitive value', () => {
    const { EventEmitter } = require('events')
    class A {
      constructor () {
        this.event = new EventEmitter()
      }
    }
    const a = new A()
    if (semver.lt(process.version, '9.0.0')) {
      expect(instanceStringer(a)).to.equal('A { event: EventEmitter { ' +
      'domain: null, _events: {}, _eventsCount: 0, ' +
      '_maxListeners: undefined ' +
      '} }')
    } else {
      expect(instanceStringer(a)).to.equal('A { event: EventEmitter { ' +
      '_events: {}, _eventsCount: 0, ' +
      '_maxListeners: undefined ' +
      '} }')
    }
  })

})
