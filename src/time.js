function formatTime(d) {
	let year   = d.getFullYear(),
			month  = d.getMonth(),
			date   = d.getDate()
			hour   = d.getHours()
			minute = d.getMinutes()
	return `${year}-${month}-${date} ${hour}:${minute}`
}

module.exports = {
	formatTime
}