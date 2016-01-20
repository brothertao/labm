var utils = require('../utils.js');
function matchEnv() {
  var ftype = atom.workspace.getActiveTextEditor().getGrammar().scopeName;
  if ('source.shell'!==ftype) {
    return false;
  }
  return true;
}
function send(terminal, code) {
  if (code=='\\x03') {
    return terminal.send('\x03');
  }
  return terminal.send(code);
}
function getTerminal(state) {
  var config = utils.getConfig()
  var name = config.name
  if (!state.terminals) {
    state.terminals = {}
  }
  if (state.terminals[name]&&state.terminals[name].ok) {
    return state.terminals[name]
  }
  var terminal = utils.terminal();
  return state.terminals[name] = terminal;
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
    var code = utils.getCode();
    var terminal = getTerminal(state);
    //execute shell command
    send(terminal, code);
  }
}
module.exports = create
