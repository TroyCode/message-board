var express = require('express')
var bodyParser = require('body-parser')

var mes = require('./src/message')
var tim = require('./src/time')

var app = express()

app.use(bodyParser.json())       
app.use(bodyParser.urlencoded({     
  extended: true
}))

const PORT = process.env.port || 3000

app.set('view engine', 'pug');

var startTime = new Date()

app.route('/')
.get((req, res) => {
	res.render('index', {
		title: 'My first message board', 
		time: tim.formatTime(startTime),
		messages: mes.getMessages()
	})
})
.post((req, res) => {
	mes.putMessage(req.body)
	res.render('index', {
		title: 'My first message board', 
		time: tim.formatTime(startTime),
		messages: mes.getMessages()
	})
})

app.listen(PORT, _ => {
	console.log(`message board is running at port ${PORT}`)
})

module.exports = app