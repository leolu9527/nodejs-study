/**
 * Created by waitfor9527 on 16/4/8.
 */
var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});

    if(pathname=='/do'){
      response.write("do");
    }
    response.write("Hello World");
    response.end();

    console.trace('end');

  }

  http.createServer(onRequest).listen(8080).on('error',function(err){
    if(err) console.log(err)
  });
  console.log("Server has started.");
}

exports.start = start;