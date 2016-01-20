var utils = require('../utils.js');
var path = require('path')
var fs = require('fs')
var remote = require('remote')
var bw = remote.require('browser-window')
function matchEnv(state, code) {
  var ftype = atom.workspace.getActiveTextEditor().getGrammar().scopeName;
  if ('source.js'!==ftype) {
    return false;
  }
  return true;
}
function send(win, code) {
  win.send('run-js', code);
}

function getWindow(state) {
  var config = utils.getConfig()
  var name = config.name
  if (state.windows&&state.windows[name]&&!state.windows[name].closed) {
    return state.windows[name];
  }

  var win = new bw({ width: 800, height: 600, webSecurity: false, show: false})
  win.once('closed', function() {
    win.closed = true;
  })
  var defaultUrl = path.resolve(__dirname, '../../statics/default.window.html')
  var init = () => {
    win.webContents.on('dom-ready', function() {
      setTimeout(()=>{
        var initFile = path.join(__dirname, './js/init.js')
        var initScripts = fs.readFileSync(initFile).toString()
        win.webContents.executeJavaScript(initScripts)
      }, 1000)
    });
  };
  var loadUrl = () => {
    var _loadUrl = win.loadUrl
    return () => {
      _loadUrl(url);
      init();
    }
  };
  win.loadUrl = loadUrl();

  var url = defaultUrl;
  win.loadUrl(defaultUrl)
  win.show()
  win.toggleDevTools()

  if (state.windows) {
    return state.windows[name] = win;
  }
  state.windows = {}
  state.windows[name] = win;
  return win
}
function create(state) {
  //get code text
  var code = utils.getCode();
  if (!matchEnv(state, code)) {
    return false;
  }
  var config = utils.getConfig()
  if (config.name==='default'||config.name==='main') {
    return false
  }

  return () => {
    var win = getWindow(state);
    send(win, code);
  }
}
module.exports = create
