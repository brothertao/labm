//code cookie
console.clear()
utils.btc()
utils.dict('fatigue')
utils.reload()

//:newwindow:canvas
neoconsole.newwindow = 'canvas'

//:focus-main
//:newwindow:canvas
console.log('hello canvas')
window
console.clear()

//
neoconsole.newwindow = ''
windows
function b(){return 'sdfs';}
a.toString()
neoconsole.windows.canvas.webContents.executeJavaScript(initScripts)
neoconsole.windows.canvas.send('execute-js', 'a()')
neoconsole.windows.canvas.webContents.loadUrl('https://www.baidu.com')


var Point = require(utils.msearch("point")[0])
Point

var editor = editor()
editor
var g = grammar()
g
//{name:1}
var str = clip()
str
var t = g.tokenizeLines(str)
t
var buffer = editor.getBuffer()
buffer
editor.clipboard.read()
const c = cursor()
c
var pos = editor.getCursorBufferPosition()
pos

//usingful
//get focus editor
var editor = () => {
  return atom.workspace.getActiveTextEditor()
}
//get current file grammar
var grammar = () => {
  return atom.workspace.getActiveTextEditor().getGrammar()
}
//get clipboard text
var clip = () => {
  return atom.workspace.getActiveTextEditor().clipboard.read()
}
//current cursor
var cursor = () => {
  const cursors = atom.workspace.getActiveTextEditor().getCursors()
  if (cursors.length>1) {
    return cursors
  }
  return cursors[0]
}
//current line
var line = () => {
  const cursors = atom.workspace.getActiveTextEditor().getCursors()
  if (cursors.length>1) {
    return 'multline'
  }
}
//get filetype
var ftype = () => {
  return atom.workspace.getActiveTextEditor().getGrammar().scopeName
}

function test() {
  this.a = 1
  vm.runInThisContext('console.log(a)')
}
test.prototype.run = () => {
  var vm = require('vm')
  vm.runInThisContext('console.log(a)')
}
var t = new test()
t
t.run()
