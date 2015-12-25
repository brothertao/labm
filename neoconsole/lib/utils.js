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
//requrie here
function hrequire(name) {
  var path  =require('path')
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

var test = () => {
  //noop;
  return true;
}
module.exports = { objkeys, grep, msearch, frequire, hrequire, dict, test }
