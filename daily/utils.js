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
var msearch = (regx, pos) => {
  if (!regx instanceof RegExp) {
    regx = new RegExp(regx)
  }
  var keys = grep(objkeys(require.cache), regx)
  if (pos!==null&&pos!==undefined) {
    return require.cache[keys[pos]].exports
  }
  return keys.reduce((obj, key)=>{
    obj[key] = require.cache[key]
    return obj
  }, {})
}

//force require
var frequire = (mod) => {
  delete require.cache[mod]
  return require(mod);
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
  return true;
}
module.exports = { objkeys, grep, msearch, frequire, dict, newWindow, test }
