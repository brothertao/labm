var path = require('path')
var utils = require('./utils')

function inject(state) {
  var drivers = ['./drivers/terminal.js', ];
  var drivers = {
    'source.js': './drivers/javascript.js',
    'source.shell': './drivers/terminal.js',
  };
  var filename = drivers[utils.ftype()];
  if (!filename) {
    return false;
  }
  var injectFn, driver;

  try {
    var driver = utils.frequire(path.join(__dirname, filename));
    injectFn = driver(state);
    if (injectFn) {
      return injectFn;
    }
  } catch (e) {
    console.log('inject driver failed:')
    console.log(e)
    return false;
  }

  return false;
}

module.exports = inject
