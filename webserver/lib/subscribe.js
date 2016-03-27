'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

scoket.connect(8001);

socket.on('error', function(err){
  throw err;
});


module.exports = socket;
