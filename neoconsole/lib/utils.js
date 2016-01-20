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
//get latest line config
function lineConfig() {
  var lineID = ':line-config '
  var editor = atom.workspace.getActiveTextEditor();
  var lines = editor.getBuffer().lines
  var tail = editor.getCursorBufferPosition().row;
  var line = null;
  while(tail--) {
    line = lines[tail].trim();
    index = line.search(lineID)
    if(index>0&&line.substring(index+lineID.length)!=="'"){
      break;
    }
    line = null;
  }
  if (line) {
    return line.substring(line.search(lineID)+lineID.length)
  }
  return '';
}
//get global config
function fileConfig() {
  const begin = 'file-config-begin'
  const end = 'file-config-end'

  var lines = atom.workspace.getActiveTextEditor().getBuffer().lines
  var tail = lines.length;
  var configLines = [];
  var line, endLine;

  //fetch config lines
  --tail
  while(tail--) {
    line = lines[tail].trim();
    if(!endLine && line.search(end)<0){
      continue;
    }
    endLine = tail

    configLines.unshift(line)
    if(line.search(begin)>0){
      break;
    }
    if(tail===0){
      configLines = [];
    }
  }
  if (configLines.length===0) {
    return {name:'default'};
  }

  //trim comment token
  var length = configLines.shift().trim().search(begin)
  configLines.pop()
  var str = configLines.reduce((acc, line)=>{
    return acc+'\n'+line.substring(length);
  }, '')
  return JSON.parse(str)
}
function getConfig() {
  var f = fileConfig()
  var l = lineConfig()
  if (l.length>0) {
    try {
      l = JSON.parse(l)
    } catch (e) {
      console.log(e)
      l = {}
    }
  } else {
    l = {}
  }
  return Object.assign({}, f, l)
}
//get code text
function getCode() {
    var editor = atom.workspace.getActiveTextEditor();
    var code = editor.getSelectedText();
    if (!code.length) {
      return editor.lineTextForBufferRow(editor.getCursorBufferPosition().row);
    }
    return code;
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
  , fileConfig
  , lineConfig
  , getConfig
  , getCode
  , test
}
