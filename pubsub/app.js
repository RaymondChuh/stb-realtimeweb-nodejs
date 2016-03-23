'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var badges = require('./controllers/badges');

app.use(bodyParser.json());

app.post('/', badges.save, badges.send, function(req, res){
  res.send('\ndone\n\n');
});

app.get('/badges', badges.get);

app.listen(8000, function(){
  console.log('listening on port 8000');
});
