#!/usr/bin/env node
var fs= require('fs');
var out;
out = fs.readFileSync('./index.html','utf8');
var express = require('express');
//buf = new Buffer(30);
//len = buf.write(out);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send (out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
