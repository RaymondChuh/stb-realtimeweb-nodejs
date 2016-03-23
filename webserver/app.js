'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000, function(){
  console.log('listen at port %d', 3000);
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});