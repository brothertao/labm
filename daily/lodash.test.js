var _ = lodash
utils.dict('chunk')
_.chunk(['a', 'b', 'c', 'd'], 2);
_.chunk(['a', 'b', 'c', 'd'], 3);
_.compact([0, 1, false, 2, '', 3]);
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
_.difference([3, 2, 1], [4, 2]);
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
utils.msearch('utils')
utils.myname()

var lw = neoconsole.windows.lodash

//lodash in new window
//:line-config {"name":"lodash"}
var lodash = require("/Applications/Atom.app/Contents/Resources/app.asar/node_modules/babel-core/node_modules/lodash/index.js")
var utils = require("/Users/a111/labm/neoconsole/lib/utils.js")
utils.reload()
var _ = lodash
document.querySelector('body')
