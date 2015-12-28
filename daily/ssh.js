var bash = () => {
  var cp = require('child_process')
  var my = cp.spawn('ssh', ['-tt','localhost', '-A'])
  my.stdout.on('data', (e)=>{
    console.log(e.toString('utf8'))
  })
  return {
    send:(msg)=>{my.stdin.write(msg+'\n')},
    p:my,
    state:my.stdin.writable,
    exit:()=>{my.stdin.write('exit\n');my.stdin.write('exit\n');}
  }
}
//relay tools. need improve
var relay = (name) => {
  var map = {
    'my':{user:'work', ip:'10.8.251.60'},
    'mya':{user:'root', ip:'10.8.251.60'},
  }
  if (!map[name]) {
    throw new Error('no config for name=:'+name)
  }
  var user = map[name].user,
      ip = map[name].ip;

  var sock = bash()
  //relay
  sock.send('ssh fengtaoyang@relay01.meilishuo.com -A')
  sock.send('ssh '+user+'@'+ip)
  return sock
}
module.exports = {relay, bash}
