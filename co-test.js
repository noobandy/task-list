const co = require('co')

var remoteData = function (data) {
	return new Promise(function work (resolve, reject) {
		setTimeout(function simulateRemoteCall () {
			resolve(data)
		}, 1000)
	})
}


var getData = function* () {
	var data = yield remoteData('some data')
	return data.toUpperCase()
}

co(function* () {
/*getData().then(function(result) {
		console.log(result)
})*/
	var data = yield getData()
	console.log(data)

})