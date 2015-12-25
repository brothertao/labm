path = require('path')
utils = require('./utils.js')

module.exports =
  activate: ->
    @settings = 
      mode: 'normal-mode'
      lang: 'js'

    atom.commands.add 'atom-workspace',
      'jscode:run': =>
        @run()
    window.utils = utils
    window.lodash = require "/Applications/Atom.app/Contents/Resources/app.asar/node_modules/babel-core/node_modules/lodash/index.js"
  run: ->

    editor = atom.workspace.getActiveTextEditor()
    return unless editor?
    pathInfo = path.parse editor.getURI()
    if pathInfo?.ext?.length > 2
      @settings.lang = pathInfo.ext.split('.').pop()
      @settings.name = pathInfo.base
    

    scripts = editor.getSelectedText()
    if scripts.length
      'run selected'
    else
      scripts = editor.lineTextForBufferRow editor.getCursorBufferPosition().row
    
    @runScripts(scripts);

  runScripts: (scripts) ->
    @env = require './'+@settings.lang+'Env.coffee'
    @env.run(scripts, @settings)


