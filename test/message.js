const mes = require('../src/message')
const assert = require('chai').assert

describe('message', () => {
	describe('composeEmail', () => {
		it('should deny clean string', () => {
			assert.strictEqual(mes.composeEmail('123'), '')
			assert.strictEqual(mes.composeEmail('abc'), '')
		})

		it('should deny domain', () => {
			assert.strictEqual(mes.composeEmail('yahoo.com'), '')
			assert.strictEqual(mes.composeEmail('gmail.com'), '')
			assert.strictEqual(mes.composeEmail('www.104.com.tw'), '')
		})

		// it('should deny double dot', () => {
		// 	assert.strictEqual(mes.composeEmail('admin@..gmail.com'), '')
		// 	assert.strictEqual(mes)
		// })

		it('should deny unrecognized symbol', () => {
			assert.strictEqual(mes.composeEmail('admin@@google.com'), '')
			assert.strictEqual(mes.composeEmail('admin~google.com'), '')
			assert.strictEqual(mes.composeEmail('admin+google.com'), '')
			assert.strictEqual(mes.composeEmail('admin!google.com'), '')
			assert.strictEqual(mes.composeEmail('admin#google.com'), '')
			assert.strictEqual(mes.composeEmail('admin^google.com'), '')
		})

		it('should accept regular email', () => {
			assert.strictEqual(mes.composeEmail('admin@google.com'), 'admin@google.com')
			assert.strictEqual(mes.composeEmail('admin@104.com.tw'), 'admin@104.com.tw')
		})

		it('should accept underline', () => {
			assert.strictEqual(mes.composeEmail('un_der@google.com'), 'un_der@google.com')
			assert.strictEqual(mes.composeEmail('admin@10_4.com.tw'), 'admin@10_4.com.tw')
		})

		it('should accept dot', () => {
			assert.strictEqual(mes.composeEmail('tony.q@google.com'), 'tony.q@google.com')
		})

		it('should accept dash', () => {
			assert.strictEqual(mes.composeEmail('tony-q-wang@google.com'), 'tony-q-wang@google.com')
		})

		it('should accept mixed charachters', () => {
			assert.strictEqual(mes.composeEmail('z_e-b.r_a@z_o-o.com'), 'z_e-b.r_a@z_o-o.com')
		})

		it('should accept hostname without dot', () => {
			assert.strictEqual(mes.composeEmail('tony.q@localhost'), 'tony.q@localhost')
		})
	})
})