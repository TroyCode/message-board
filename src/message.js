var tim = require('./time')

var messages = []

function getMessages() {
	return messages
}

function putMessage(input) {
	let message = {
		author: input.author,
		email: composeEmail(input.email),
		time: tim.formatTime(new Date()),
		content: input.content
	}
	messages.push(message)
}

function composeEmail(email) {
	let re = /[0-9a-z._-]{1,}@[0-9a-z._-]{1,}/i
	let result = re.exec(email)
	if (result) {
		var realEmail = result[0]
	}
	else {
		var realEmail = ''
	}
	return realEmail
}

module.exports = {
	getMessages,
	putMessage,
	composeEmail
}