var http = require('http');
var net = require('net');
var url = require('url');

var g = []
function request(cReq, cRes) {
  g.push(cReq)
    var u = url.parse(cReq.url);

    var options = {
        hostname : u.hostname,
        port     : u.port || 80,
        path     : u.path,
        method     : cReq.method,
        headers     : cReq.headers
    };

    var pReq = http.request(options, function(pRes) {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
    }).on('error', function(e) {
        cRes.end();
    });

    cReq.pipe(pReq);
    cReq.on('data', function(chunk) {
      console.log(chunk.toString('utf8'))
    })
}
var gcSock, gpSock
function connect(cReq, cSock) {
    var gcSock = cSock
    var u = url.parse('http://' + cReq.url);

    var pSock = net.connect(u.port, u.hostname, function() {
        cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
        pSock.pipe(cSock);
    }).on('error', function(e) {
        cSock.end();
    });
    gpSock = pSock

    cSock.pipe(pSock);
}

var server = http.createServer()
    .on('request', request)
    .on('connect', connect)
    .listen(8888, '0.0.0.0');

//test
server.close()
gpSock.on('data', function(chunk) {
  console.log(chunk.length)
});
gpSock.listeners('close')
g[0]
lodash.times(50, function() {console.log(g.pop())})
