const tim = require("../src/time")
const assert = require('chai').assert

describe('time', () => {
	describe('formatTime', () => {
		it('should tansform into readable format', () => {
			let d = new Date('2017-10-10 20:20')
			assert.strictEqual(tim.formatTime(d), '2017-10-10 20:20')
		})

		it(('should handle zero padding situation'), () => {
			let d = new Date('2017-02-10 20:20')
			assert.strictEqual(tim.formatTime(d), '2017-02-10 20:20')

			d.setDate(2)
			assert.strictEqual(tim.formatTime(d), '2017-02-02 20:20')

			d.setHours(0)
			assert.strictEqual(tim.formatTime(d), '2017-02-02 00:20')

			d.setHours(1)
			assert.strictEqual(tim.formatTime(d), '2017-02-02 01:20')

			d.setMinutes(0)
			assert.strictEqual(tim.formatTime(d), '2017-02-02 01:00')

			d.setMinutes(1)
			assert.strictEqual(tim.formatTime(d), '2017-02-02 01:01')
		})
	})
})