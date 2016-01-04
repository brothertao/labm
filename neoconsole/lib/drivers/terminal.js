var utils = require('../utils.js');
function matchEnv() {
  var ftype = atom.workspace.getActiveTextEditor().getGrammar().scopeName;
  if ('source.shell'!==ftype) {
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
function send(terminal, code) {
  if (code=='\\x03') {
    return terminal.send('\x03');
  }
  return terminal.send(code);
}
function getTerminal(state) {
  if (state.terminal&&state.terminal.ok) {
    return state.terminal;
  }
  var terminal = utils.terminal();
  return state.terminal = terminal;
}
function initEnv(state) {
}
function create(state) {
  if (!matchEnv()) {
    return false;
  }
  return () => {
    //get code text
    initEnv(state)
    var code = getCode();
    var terminal = getTerminal(state);
    //execute shell command
    send(terminal, code);
  }
}
module.exports = create
