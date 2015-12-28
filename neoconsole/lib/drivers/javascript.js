var utils = require('../utils.js');
var path = require('path')
var fs = require('fs')
var remote = require('remote')
var bw = remote.require('browser-window')
function matchEnv(state, code) {
  var ftype = atom.workspace.getActiveTextEditor().getGrammar().scopeName;
  preExecute(state, code)
  if ('source.js'!==ftype||!state.newwindow) {
    return false;
  }
  return true;
}
function getCode() {
    var editor = atom.workspace.getActiveTextEditor();
    var code = editor.getSelectedText();
    if (!code.length) {
      return editor.lineTextForBufferRow(editor.getCursorBufferPosition().row);
    }
    return code;
}
function preExecute(state, code) {
  var rst = code.match(/^\/\/:(.*)/);
  if (!rst) {
    return true;
  }
  if ('focus-main'===rst[1]) {
    state.newwindow = '';
    return false;
  }
  var options = rst[1].split(':');
  var winName = options[1];
  if ('newwindow'===options[0] && winName) {
    state.newwindow = winName;
    return true;
  }
  return true;
}
function send(win, code) {
  win.send('run-js', code);
}

function getWindow(state) {
  var name = state.newwindow
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
  var code = getCode();
  if (!matchEnv(state, code)) {
    return false;
  }
  return () => {
    var win = getWindow(state);
    send(win, code);
  }
}
module.exports = create
