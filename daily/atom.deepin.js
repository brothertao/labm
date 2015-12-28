//TODO: grep object keys

//get coffee module and compile coffee script
var coffee = require('/Applications/Atom.app/Contents/Resources/app.asar/src/coffee-script.js')
var ts = require('/Applications/Atom.app/Contents/Resources/app.asar/src/typescript.js')
coffee.compile('console.log editor')
//set module path
module.paths.push(neoconsole)
//tooltips
var tt = atom.tooltips.add(atom.views.getView(editor), {title: 'This is a tooltip'})
//view pen
var pen = require('atom-space-pen-views')
//commands
atom.commands.add('atom-text-editor', {'test:run':(a)=>{
  console.log(a);
}})
atom.commands.selectorBasedListenersByCommandName['command-palette:toggle']
atom.commands.selectorBasedListenersByCommandName['tree-view:toggle']
atom.commands.dispatch(document.querySelector('atom-workspace'), 'command-palette:toggle')
atom.commands.dispatch(document.querySelector('atom-workspace'), 'tree-view:toggle')
//panel
atom.workspace.panelContainers.bottom.panels[0].show()
atom.workspace.panelContainers.bottom.panels[0].item

//test code
var u = utils.hrequire('../neoconsole/lib/utils')
u.btc
window.utils = u
utils.btc()
console.clear()
