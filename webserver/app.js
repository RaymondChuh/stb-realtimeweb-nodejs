'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subSocket = require('./lib/subscribe');
var model = require('./models/badges');

server.listen(3000, function(){
  console.log('listen at port %d', 3000);
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

io.sockets.on('connection', function(socket){
  model.get(function(err, data){
    if (err) return;
    data.forEach(function(badge){
      socket.emit('badge', badge);
    });
  });
});

subSocket.on('message', function(message){
  io.sockets.emit('badge', message);
});
