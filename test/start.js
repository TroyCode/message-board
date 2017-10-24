const assert = require('chai').assert
const request = require('supertest')
const server = require('../start')

function testRequest(path, method, reqModifier) {
  method = method || 'get'
  reqModifier = reqModifier || (x => x)

  return reqModifier(
  	request(server)[method](path)
  ).expect('Content-Type', /html/)
}

describe('start', () => {
	describe('GET /', () => {
		it('should no error', (done) => {
			testRequest('/', 'get') 
			.expect(200)
			.end((err,res) => {
				assert.notExists(err)
				done()
			})
		})
	})
})