function zeroPaddingLeft(str, place) {
	while (str.length < place) {
		str = '0' + str
	}
	return str
}

function formatTime(d) {
	let year   = d.getFullYear(),
			month  = zeroPaddingLeft((d.getMonth() + 1).toString(), 2),
			date   = zeroPaddingLeft(d.getDate().toString(), 2),
			hour   = zeroPaddingLeft(d.getHours().toString(), 2),
			minute = zeroPaddingLeft(d.getMinutes().toString(), 2)
			second = zeroPaddingLeft(d.getSeconds().toString(), 2)
	return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

module.exports = {
	formatTime
}