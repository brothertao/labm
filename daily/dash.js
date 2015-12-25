console.log(document)
var a, b;
a = 1;
debugger
b = 2;
console.log(a+b);
a+b

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
loadScript('http://apps.bdimg.com/libs/react/0.10.0/react.min.js')
console.log($('body'))
$.get('http://www.baidu.com', function(e) {console.log(e)});
$.post('http://promotion.meilishuo.com/aj/sale/coupon_venue?name=dp_151111', function(e) {console.log(e)});
console.log(btoa('xxdfsd'));

require('ipc').on('ping', function(message) {
    console.log(message);  // Prints "whoooooooh!"
});
