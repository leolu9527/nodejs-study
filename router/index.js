/**
 * Created by waitfor9527 on 16/4/8.
 */
var server = require("./start");
var router = require("./router");

server.start(router.route);