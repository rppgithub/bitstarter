var fs = require('fs');
var HTMLFILE_DEFAULT="index.html";

var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  fs.readFileSync('index.html',function(err,data) {
	if (err) throw err;
        buf = new Buffer(30);
  	response.send(buf.toString(data));
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
