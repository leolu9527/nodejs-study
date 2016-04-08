/**
 * Created by waitfor9527 on 16/4/7.
 */
var https = require('https')
var fs = require('fs')

var options = {
  key: fs.readFileSync('ssh_key.pem'),
  cert: fs.readFileSync('ssh_cert.pem')
}

https.createServer(options, function(req,res) {
  res.writeHead(200)
})