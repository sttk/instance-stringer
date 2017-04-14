'use string'

/* global describe it */
/* eslint quotes: "off" */

const instanceStringer = require('../')
const chai = require('chai')
const expect = chai.expect

describe('instance-stringer', () => {

  describe('Class instances', () => {

    it('Should output content string of an empty object', () => {
      class MyClass {}
      const instance = new MyClass()
      expect(instanceStringer(instance)).to.equal('MyClass {}')
    })

    it('Should output content string of an object having properties', () => {
      class SubClass {
        constructor () {
          this.p = 'P'
          this.q = 9
        }
      }
      class MyClass {
        constructor () {
          this.a = 1
          this.b = { c: 'a', d: { e: 2, f: {} } }
          this.c = { g: [1, 2, 3], h: ['X', 'Y', 'Z'] }
          this.d = [{ i: 1, j: 2 }, { k: new SubClass() }, [9, 8, 7]]
          this.e = { l: { m: { n: {} } } }
        }
      }
      const instance = new MyClass()
      expect(instanceStringer(instance)).to.equal("MyClass { " +
        "a: 1, " +
        "b: { c: 'a', d: { e: 2, f: {} } }, " +
        "c: { g: [1, 2, 3], h: ['X', 'Y', 'Z'] }, " +
        "d: [{ i: 1, j: 2 }, { k: SubClass { p: 'P', q: 9 } }, [9, 8, 7]], " +
        "e: { l: { m: { n: {} } } } " +
        "}")
    })
  })


  describe('Plain objects', () => {

    it('Should output content string of an empty object', () => {
      const plainObj = {}
      expect(instanceStringer(plainObj)).to.equal('{}')
    })

    it('Should output content string of an object having properties', () => {
      class SubClass {
        constructor () {
          this.p = 'P'
          this.q = 9
        }
      }
      const plainObj = {
        a: 1,
        b: { c: 'a', d: { e: 2, f: {} } },
        c: { g: [1, 2, 3], h: ['X', 'Y', 'Z'] },
        d: [{ i: 1, j: 2 }, { k: new SubClass() }, [9, 8, 7]],
        e: { l: { m: { n: {} } } },
      }
      expect(instanceStringer(plainObj)).to.equal("{ " +
        "a: 1, " +
        "b: { c: 'a', d: { e: 2, f: {} } }, " +
        "c: { g: [1, 2, 3], h: ['X', 'Y', 'Z'] }, " +
        "d: [{ i: 1, j: 2 }, { k: SubClass { p: 'P', q: 9 } }, [9, 8, 7]], " +
        "e: { l: { m: { n: {} } } } " +
        "}")
    })
  })

})
