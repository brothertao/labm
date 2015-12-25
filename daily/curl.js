var http = require('http')

var url = 'http://localhost:3000/'
var d;
var ret = http.get(url, function(data) {
  var content = '';
  data.on('data', function(chunk) {
    content += chunk;
  });
  data.on('end', function(chunk) {
    console.log(content);
  });
})
