var http = require('http')

var options = {
	hostname: '127.0.0.1',
	port: 2015,
	path: '',
	method: 'GET',
	headers: {
		'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	'Accept-Encoding':'gzip, deflate, sdch',
	'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
	'Cache-Control':'max-age=0',
	'Connection':'keep-alive',
	'Host':'127.0.0.1:2015',
	'Upgrade-Insecure-Requests':1,
	'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'
	}
}

var req = http.request(options,function (res) {
	console.log('Status: ' + res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function() {
		console.log('ok')
	})
})

req.on('error',function(e) {
	console.log('Error: '+ e.message)
})

//req.write(postData)

req.end()