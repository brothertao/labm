//window-mode
var remote = require('remote')
var bw = remote.require('browser-window')
var vm = require('vm')
var fs = require('fs')
var path = require('path')
vm.runInThisContext('console.log("hhhh")')
var focusWindow = bw.getFocusedWindow()
var windows = bw.getAllWindows()
function testContext() {
  var a = 1;
  b = new w;
  b.contextInfo();
}
function w() {
  this.bb = 1;
}
var d = new Date;
d.toString()
var c = {a:1}

Object.keys(d)
'use strict'
for (var a in d) {
  console.log(a)
}
var end1, end2;
var cb1 = function (e) {
  it1.next()
}
var cb2 = function (e) {
  it2.next()
}
function* co1() {
  var fs = require('fs');
  var dir = '/Users/a111/mls/codes/promotion';
  var sub = fs.readdirSync(dir);
  var count = 0;
  while (10000>count) {
    for (var index in sub) {
      var f = dir+'/'+sub[index];
      var r = yield fs.exists(f, cb1);
      count++;
    }
  }
  end1 = new Date;
}
function* co2() {
  var fs = require('fs');
  var dir = '/Users/a111/mls/codes/promotion';
  var sub = fs.readdirSync(dir);
  var count = 0;
  while (10000>count) {
    for (var index in sub) {
      var f = dir+'/'+sub[index];
      var r = yield fs.exists(f, cb2);
      count++;
    }
  }
  end2 = new Date;
}
var it1 = co1();
var it2 = co2();
it1.next();
it2.next();
var diff = end.getTime() - d.getTime();
console.log(diff);

var  test2 = new Date;
function syncread() {
  var fs = require('fs');
  var dir = '/Users/a111/mls/codes/promotion';
  var sub = fs.readdirSync(dir);
  var count = 0;
  while (10000>count) {
    for (var index in sub) {
      var f = dir+'/'+sub[index];
      var r = fs.existsSync(f);
      count++;
    }
  }
  end2 = new Date;
}
syncread();
syncread();
var end3 = new Date();

//yield performance test
var start = [];
function request() {
  var d = new Date;
  start.push(d.getTime());
  var url = 'https://api.github.com/user/brothertao';
  return fetch(url);
}
var start2 = new Date;
var p = request();
p.then(request)
.then(request)
.then(function(e) {console.log(e);end2 = new Date;})
start2.getTime() - end2.getTime();

var start2 = new Date;
var end1, end2, end3, end4, end5, end6;
var start = [];
request().then(function(e) {console.log(e);end1 = new Date;});
request().then(function(e) {console.log(e);end2 = new Date;});
request().then(function(e) {console.log(e);end3 = new Date;});
request().then(function(e) {console.log(e);end3 = new Date;});
request().then(function(e) {console.log(e);end4 = new Date;});
request().then(function(e) {console.log(e);end5 = new Date;});
request().then(function(e) {console.log(e);end6 = new Date;});
start2.getTime() - end1.getTime();
start2.getTime() - end2.getTime();
start2.getTime() - end3.getTime();
start2.getTime() - end4.getTime();
start2.getTime() - end5.getTime();
start2.getTime() - end6.getTime();
var t;
for (var i = 0; i < start.length; i++) {
  t = start[i+1] - start[i];
  console.log(t);
}


w.prototype.contextInfo = function () {
  var vm = require('vm')
  vm.runInContext('console.log(this)', vm.createContext(this));
}
testContext()
console.clear()
"use strict"
function logger(store=1) {
  let next = store.dispatch;return {}
}

var s = 'chrome.devtools.panels.elements.createSidebarPane("Font Properties", function(sidebar) { sidebar.setPage("/tmp/Sidebar.html"); sidebar.setHeight("8ex"); });';
te

var s = "var ds = global.toString();var gs = '';for (var elem in window._loadedScripts) {gs += elem + ';'}";
var ss = s+"var fs = require('fs');fs.writeFileSync('/tmp/console.html', gs)";
//dev console code
var str = global.toString();
debugger;
for (var p in window) {
  str += p+'\n';
}
var fs = require('fs');
fs.writeFileSync('/tmp/console.log', str);
win.executeJavaScriptInDevTools(ss);

var editor = atom.workspace.getActiveTextEditor()
editor.getSelectedText()
var a = remote.require('app')
a


var ll = console.log.bind(console)
function getWindowById(id) {
  var remote = require('remote')
  var bw = remote.require('browser-window')
  var windows = bw.getAllWindows()
  for (w of windows) {
    ll(w.id)
    if (w.id==id) {
      return w;
    }
  }
  return false
}
var win = getWindowById(4);
ll(win)
var btn = document.querySelector('button')
var pos = btn.getBoundingClientRect()
var webc = win.webContents
var ev = {
  type:'mouseDown',
  button:'left',
  x:parseInt(pos.left+40),
  y:parseInt(pos.top+10),
  clickCount:1
}
webc.sendInputEvent(ev)
var ev = {
  type:'mouseUp',
  button:'left',
  x:parseInt(pos.left+40),
  y:parseInt(pos.top+10),
  clickCount:1
}
webc.sendInputEvent(ev)
win.loadUrl('http://localhost:3000/')
var url = 'http://localhost:3000/';
document.location.href = url
var s = remote.require('screen')
var electron = remote.require('app')

dumpkeys(module.exports)
var p = atom.packages
var ps = p.getActivePackages()
var pi = ps[2]
var myp, name;
for (var i = 0; i < ps.length; i++) {
  name = ps[i].name
  console.log(name)
  if ('neoconsole') {
    myp = ps[i]
  }
}
myp.deactivateKeymaps()
myp.activateKeymaps()
atom-mode
var editor = atom.workspace.getActiveTextEditor()
var path = require('path')
var jsp = path.parse(editor.getURI())
jsp
jsp.ext.trim().split('.').pop()
var utilfile = jsp.dir+'/utils.js'
utilfile
var utils = require(jsp.dir+'/utils.js')
var d = utils.dumpkeys
d(atom)
var co  = require.cache[utilfile]

var str = '\\x0d\\x03';
str
String.fromCharCode(str) == '\x03'
var r = str.match(/\\x(\w+)/)
r[1]
parseInt('0d', 16)
console.log(module)
var o = {};
Object.observe(o, function(changes) {console.log(changes)})
o.a = 1
o.a = {}
o.a.c = ''
o.a.d = 2
delete o.a
o.b
o.b = 1
