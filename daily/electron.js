normal-mode
atom-mode
var app = remote.require('app');
var cb = BrowserWindow.getFocusedWindow()
var d = cb.devToolsWebContents
cb.restart()
var allb = BrowserWindow.getAllWindows()
allb[1].restart()
allb[0].show(true)
var b = BrowserWindow.getAllWindows()[0]
b.restart()
win.on('closed', function() {
  win = null;
});
//create new window
var createWindow = (options) => {
  var remote = require('remote');
  var BrowserWindow = remote.require('browser-window');
  return new BrowserWindow({ width: 800, height: 600, show: true});
}
console.log('just test');
win.loadUrl('https://github.com');
win.show();
win.openDevTools()
win.domain
win.restart()
var s = 'console.log(process.versions)'
win.devToolsWebContents.executeJavaScript(s)
win.loadUrl('file:///tmp/index.html');

(function(window) {
  var document = window.document;
  var loadScript = function(uri) {
    var script = document.createElement('script');
    script.src = uri;
    document.querySelector('head').appendChild(script);
  };
  window.loadScript = loadScript;

})(window)
loadScript('http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js')

//debug into console panel
//win._loadDevToolsExtensions
//content script 能够使用chrome.extension.* API, executeJavaScriptInDevTools,拿不到相应的对象
//developer.chrome.com/extensions/content_scripts
//developer.chrome.com/extensions/devtools
var s = 'chrome.devtools.panels.elements.createSidebarPane("Font Properties", function(sidebar) { sidebar.setPage("/tmp/Sidebar.html"); sidebar.setHeight("8ex"); });';
te

var s = "var ds = global.toString();var gs = '';for (var elem in window._loadedScripts) {gs += elem + ';'}";
var ss = s+"var fs = require('fs');fs.writeFileSync('/tmp/console.html', gs)";
var str = global.toString();
debugger;
for (var p in window) {
  str += p+'\n';
}
var fs = require('fs');
fs.writeFileSync('/tmp/console.log', str);
win.executeJavaScriptInDevTools(ss);
