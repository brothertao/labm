atom-mode
module.paths.push('/Users/a111/.atom/packages/neoconsole/node_modules')
var pty = require('pty.js')
console.log(pty)
var ll = console.log.bind(console)
ll(pty)
var term = pty.fork('/bin/bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env,
  gid:20,
  uid:501
});
term.on('data', function(data) {
  console.log(data);
});
term
term.write('tail -f /tmp/err.out\r')
term.write('\3')
term.write("\26")
term.write("stty -a\r")
term.write("tty\r")
term.write("cat /tmp/err.out\r")
term.write("ps -ef|grep tail\r")
term.write("/usr/local/bin/fish\r")
term.write("exit\r")
term.write("su - a111\r")
term.write("qwe123mls\r")
term.write("bash\r")
term.write("which subl\r")
term.end()
String.fromCharCode(98)
