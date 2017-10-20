function formatTime(d) {
	let year   = d.getFullYear(),
			month  = d.getMonth() + 1,
			date   = d.getDate()
			hour   = d.getHours()
			minute = d.getMinutes()
	return `${year}-${month}-${date} ${hour}:${minute}`
}

module.exports = {
	formatTime
}