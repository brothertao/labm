var vm = require('vm')
var ipc = require('ipc')
ipc.on('run-js', function(message) {
  console.log(vm.runInThisContext(message))
});
