var tim = require('./time')

var messages = []

function getMessages() {
	return messages
}

function putMessage(input) {
	let message = {
		author: input.author,
		email: input.email,
		time: tim.formatTime(new Date()),
		content: input.content
	}
	messages.push(message)
}

module.exports = {
	getMessages,
	putMessage
}