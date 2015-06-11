var fs = require('fs');
var HTMLFILE_DEFAULT="index.html";

var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
        var buf = fs.readFileSync('index.html') ;
        var bf = new Buffer(30);
  	response.send(bf.toString(buf));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
