path = require('path')
vm = require('vm')
utils = require('./utils.js')

module.exports =
  activate: ->
    @state =
      settings: {}
      injectFn:null
    #hack expose point for quikly develop
    window.neoconsole = @state

    atom.commands.add 'atom-workspace',
      'jscode:run': =>
        @run()

    window.utils = utils
    window.lodash = require "/Applications/Atom.app/Contents/Resources/app.asar/node_modules/babel-core/node_modules/lodash/index.js"

  run: ->
    inject = utils.frequire(path.join(__dirname, './inject.js'))
    @state.injectFn = inject @state
    if @state.injectFn
      return @state.injectFn()

    code = @getCodePhase @state
    rst = @executePhase @state, code
    @renderPhase @state, rst

  getCodePhase: (state)->
    editor = atom.workspace.getActiveTextEditor()
    code = editor.getSelectedText()
    if !code.length
      code = editor.lineTextForBufferRow editor.getCursorBufferPosition().row
    return code

  executePhase: (state, code) ->
    atom.openDevTools()
    try
      return vm.runInThisContext code
    catch e
      return {code, e}
  renderPhase: (state, rst) ->
    console.log(rst)
