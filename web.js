var express = require('express');
var fs = require('fs');
var str = '';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	str = fs.readFileSync("./index.html").ToString

  //response.send('Hello World 2!');
	response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
