const loaders = require('./index')
var expect = require("chai").expect

describe('tests', () => {
	it('expose array with all loaders', () => {
		expect(Array.isArray(loaders)).to.be.true
	})

	it('be able to require loaders', (done) => {
		expect(() => require('babel-loader')).to.not.throw()
		expect(() => require('css-loader')).to.not.throw()
		expect(() => require('style-loader')).to.not.throw()
		expect(() => require('json-loader')).to.not.throw()
		expect(() => require('url-loader')).to.not.throw()
		expect(() => require('vue-loader')).to.not.throw()
		done()
	})
})

