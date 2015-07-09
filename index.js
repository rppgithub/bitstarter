var fs = require('fs');
var HTMLFILE_DEFAULT="index.html";

var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
        var buf = fs.readFileSync('index.html','utf-8') ;
  	response.send(buf.toString('utf8'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
