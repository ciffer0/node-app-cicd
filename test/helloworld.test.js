const chai = require('chai')
const expect  = require('chai').expect
const helloworld = require('../src/helloworld')

const foo = 'bar'

describe('Hello World Tests',() => {
  describe('Dummy test', () => {
    it('This is just a dummy test', () => {
      expect(foo).to.be.a('string');
      expect(foo).to.equal('bar');
      expect(foo).to.have.lengthOf(3);
    })
  })
  describe('Not very useful test', () => {
    it('Build hello string', () => {
      const myHostname = 'superHostName'
      let helloString = helloworld.buildHello(myHostname)
      expect(helloString).to.be.a('string');
      expect(helloString).to.equal(`Hello world from host: ${myHostname}`)
    })
  })
})