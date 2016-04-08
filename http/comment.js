var http = require('http')
var querystring = require('querystring')

var postData =querystring.stringify({
	'content': '老师讲的不错',
	'cid': 348
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=d52c72ce-8481-495e-b054-1531d10cea31; imooc_isnew_ct=1459564420; IMCDNS=0; PHPSESSID=up39d3svaalm8obfm7mjmtf8f5; loginstate=1; apsid=llYWZlMWRmYmU5ZjVlZjZlYWRjZjg1ZDJmNDBjZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjEzOTA5MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnaGx1ODcxMjhAMTYzLmNvbQAAAAAAAAAAAAAAAAAAADU0OGM1MWI0NWEzNjJmZmFhODAzYzk5Mzg3NTBlZjFm40r%2FVuNK%2F1Y%3DYj; last_login_username=ghlu87128%40163.com; jwplayer.qualityLabel=è¶æ¸; jwplayer.mute=false; imooc_isnew=2; cvde=56ff2f84b5e7f-124; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1459564635; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1459672624',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
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

req.write(postData)

req.end()