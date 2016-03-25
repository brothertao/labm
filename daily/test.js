var editor = atom.workspace.getActiveTextEditor()
editor
utils.btc()
utils.lineConfig()
utils.fileConfig()
editor.lineTextForScreenRow()
editor.lineTextForBufferRow()
var row = editor.getCursorBufferPosition().row
var buffer = editor.getBuffer()
while (row--) {
  console.log(buffer.lines[row])
}
8897*12
10000/12
6463*0.028
200*600
4600*12
//test
var a = "2015-11-12 00"
a.substr
process.versions
'use strict'
class iii {
  constructor() {
    console.log('sss')
  }
}
var path = require('path')
path.join('s')
utils.dict('dedupe')
new iii()
delete iii

var test = function(a, b) {
  console.log('a');
  console.log(a);
  console.log('b');
  console.log(b);
}
var t = test.bind(this, 1)
t()
//:line-config {"name":"default"}
console.log('\x1B[0;1m'+'sss')
require.main
utils.reload()
delete neoconsole.terminals["line-shell"]
var a = require('module')
var b = require('semver')
a
utils.dict('node')
module._compile('console.log("sss")', '/tmp/t.js')
var d = new Date
d.getTime()
var url = "http://imgtest-dl.meiliworks.com/pic/_o/91/be/f47f1b9ffe7519247350cac58d43_1000_1500.cg.jpg"
var pos = url.indexOf('/pic/')
url.substr(pos+1)




utils.dict('chakra')
~1
~-1
path.resolve('/tmp/test/test/../texx')
path.join('/tmp/test/test/../texx', 'nam')
process.env
process.platform
//:line-config
utils.reload()
utils.fileConfig()
utils.lineConfig()
console.clear()
for (var i = 0; i < 10; i++) {
  d = new Date()
  console.log(d.getTime());
}
"\u6587\u4ef6\u672a\u627e\u5230"
//post
var post = {}
var feed = {}
var hotspot = {}
var tag = "zara"
post
post.id = "ID"
post.feeds = [feed]
post.tags = [tag]
post.goods = [12,13]
post.coverImage = "image url"
post.category = "ID"
post.type = "long|short"
post.title = "string"
post.publicTime = "string"
hotspot
hotspot.top = "int"
hotspot.left = "int"
hotspot.brand = "string"
hotspot.price = "int"
hotspot.category = "string"
hotspot.goods = [12, 13]
hotspot.tags = [tag]
feed
feed.img = "image url"
feed.description = "string"
feed.hotspots = [hotspot]
post

JSON.stringify(post)

//good
var good = {}
good.origUrl = "user input url"
good.mob = {}
good.mob.url = "good mob url"
good.mob.img = "mob image url"
good.mob.title = "string"
good.mob.price = "int"
good.mob.description = "image url"
good.pc = {}
good.pc.url = "good mob url"
good.pc.img = "pc image url"
good.pc.title = "string"
good.pc.price = "int"
good.pc.description = "image url"
good

JSON.stringify(good)

//file-config-begin
// {"name": "canvas"}
//file-config-end
