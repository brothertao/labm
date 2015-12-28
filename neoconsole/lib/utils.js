//get and dump object keys
var objkeys = (obj, all, verbose) => {
  var keys = [];
  for (var key in obj) {
    //case own
    if (!all && obj.hasOwnProperty(key)) {
      keys.push(key)
      verbose && console.log(key)
    }
    //case all
    if (all){
      keys.push(key)
      verbose && console.log(key)
    }
  }
  return keys;
}
//grep string arr
var grep = (arr, regx) => {
  return arr.filter((str)=>{
    return str.match(regx)
  })
}
//msearch
var msearch = (regx) => {
  if (!regx instanceof RegExp) {
    regx = new RegExp(regx)
  }
  return grep(objkeys(require.cache), regx)
}

//force require
var frequire = (mod) => {
  delete require.cache[mod]
  return require(mod);
}
var myname = () => {
  return atom.workspace.getActiveTextEditor().getPath();
}
//requrie here
function hrequire(name) {
  var path = require('path')
  var fn = atom.workspace.getActiveTextEditor().getPath()
  var fn = path.dirname(fn)
  if (name[0]=='.') {
    var mod = path.join(fn, name)
    mod.match(/\.js$/g) ? '' : mod += '.js'
    delete require.cache[mod]
    return require(mod)
  }

  var p = getModulesPath(fn)
  if (mod===null) {
    return null
  }
  module.paths.push(p)
  var obj = require(name)
  module.paths.pop()
  return obj

  function getModulesPath(fn) {
    var p = path.join(fn, 'node_modules')
    if (p.split('/').length<3) {
      return null
    }

    var fs =require('fs')
    if (!fs.existsSync(p)) {
      return getModulesPath(dirname(fn))
    }
    return p;
  }
}
//dict from bing
var dict = (word) => {
  var url = 'http://bj1.api.bing.com/qsonhs.aspx?ds=bingdict&q='+word
  return fetch(url, {creditails:'include'})
  .then((resp)=>{
    return resp.json()
  })
  .then((json)=>{
    if (json.AS.FullResults===0) {
      return [];
    }
    var sugg = json.AS.Results[0].Suggests
    return sugg.map((obj)=>{
      return obj.Txt.replace('<strong>', '').replace('</strong>', '')
    })
  })
  .then((arr)=>{
    console.log(arr)
    return arr
  })
}
//create new window
var newWindow = (url) => {
  var remote = require('remote')
  var bw = remote.require('browser-window')
  var w = new bw({ width: 800, height: 600, show: true})
  url && w.loadUrl(url)
  return w;
}
//okcoin
var btc = () => {
  const url = 'https://www.btc123.com/api/getTicker?symbol=okcoincnbtccny'
  fetch(url, {creditails:'include'})
  .then((rep)=>{
    return rep.json()
  })
  .then((json)=>{
    const ticker = json.datas.ticker
    const rst = {
      last:ticker.last,
      riseRate:ticker.riseRate,
      high:ticker.high,
      low:ticker.low,
      vol:ticker.vol,
    }
    return console.log(rst)
  })
  .catch((err)=>{
    return console.log('api server error!')
  })
}
//get terminal
var terminal = () => {
  var cp = require('child_process')
  var my = cp.spawn('ssh', ['-tt','localhost', '-A'])
  my.stdout.on('data', (e)=>{
    console.log(e.toString('utf8'))
  })
  return {
    send:(msg)=>{my.stdin.write(msg+'\n')},
    p:my,
    ok:my.stdin.writable,
    exit:()=>{my.stdin.write('exit\n');my.stdin.write('exit\n');}
  }
}
var clip = () => {
  return atom.workspace.getActiveTextEditor().clipboard.read();
}
//reload self
var reload = (name) => {
  if (!name) {
    window.utils = frequire(__filename)
  }
}
//current file type
var ftype = () => {
  return atom.workspace.getActiveTextEditor().getGrammar().scopeName;
}
var test = () => {
  //noop;;
  return true;
}

module.exports = { objkeys
  , reload
  , grep
  , myname
  , msearch
  , frequire
  , ftype
  , hrequire
  , dict
  , newWindow
  , btc
  , terminal
  , clip
  , test
}
