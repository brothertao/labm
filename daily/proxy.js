var http = require('http');
var net = require('net');
var url = require('url');

var urled, request, response, grealReq, grealRes,gOptions=[]
// Create an HTTP tunneling proxy
var proxy = http.createServer(function (req, res) {
  urled = url.parse(req.url);
  urled.port = urled.port || 80;
  request = req;
  response = res;
  var options = {
    port: urled.port,
    hostname: urled.hostname,
    method:req.method,
    path:urled.path,
    headers:req.headers
  };
  var realReq = http.request(options, function(realRes) {
    grealRes = realRes;
    res.writeHead(realRes.statusCode, realRes.headers);
    realRes.pipe(res);
  })
  realReq.end();
  grealReq = realReq;
});

proxy.listen(12345, '127.0.0.1');
proxy.close()
response.end('ok')
