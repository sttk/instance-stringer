(function(){
'use strict'


const { arrayStringer } = instanceStringer


const expect = chai.expect

describe('array-stringer', () => {

  it('Should output an empty array', () => {
    const array = []
    expect(arrayStringer(array)).to.equal('[]')
  })

  it('Should output elements of arrays', () => {
    let array = [1, 2, 3]
    expect(arrayStringer(array)).to.equal('[1, 2, 3]')

    array = ['A', 'B', 'C']
    expect(arrayStringer(array)).to.equal("['A', 'B', 'C']")

    array = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { c: 5, d: 6 }]
    expect(arrayStringer(array)).to.equal(
      "[{ a: 1, b: 2 }, { a: 3, b: 4 }, { c: 5, d: 6 }]")

    array = [[1, 2], ['A', 'B'], [{ c: 'C', d: 'D' }, { e: 'E' }]]
    expect(arrayStringer(array)).to.equal(
      "[[1, 2], ['A', 'B'], [{ c: 'C', d: 'D' }, { e: 'E' }]]")
  })

  it('Should output elements of arrays having class instances', () => {
    class MyClass {
      constructor (a, b) {
        this.a = a || 1
        this.b = b || 2
      }
    }
    const array = [new MyClass(), new MyClass(3, 4), new MyClass('A', 'B')]
    expect(arrayStringer(array)).to.equal("[" +
      "MyClass { a: 1, b: 2 }, " +
      "MyClass { a: 3, b: 4 }, " +
      "MyClass { a: 'A', b: 'B' }" +
      "]")
  })

})


})();
(function(){
'use string'



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

})();
(function(){
'use string'


const { propsStringer } = instanceStringer

const expect = chai.expect

describe('props-stringer', () => {

  describe('Class instances', () => {

    it('Should output content string of an empty object', () => {
      class MyClass {}
      const instance = new MyClass()
      expect(propsStringer(instance)).to.equal('{}')
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
      expect(propsStringer(instance)).to.equal("{ " +
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
      expect(propsStringer(plainObj)).to.equal('{}')
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
      expect(propsStringer(plainObj)).to.equal("{ " +
        "a: 1, " +
        "b: { c: 'a', d: { e: 2, f: {} } }, " +
        "c: { g: [1, 2, 3], h: ['X', 'Y', 'Z'] }, " +
        "d: [{ i: 1, j: 2 }, { k: SubClass { p: 'P', q: 9 } }, [9, 8, 7]], " +
        "e: { l: { m: { n: {} } } } " +
        "}")
    })
  })

})

})();
