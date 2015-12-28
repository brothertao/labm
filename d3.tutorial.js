//:focus-main
neoconsole.windows.canvas.toggleDevTools()
neoconsole.windows.canvas.webContents.insertCSS(utils.clip())
utils.btc()

//:newwindow:canvas
//init
document.querySelector('body').innerHTML=''
module.paths.push('/Users/a111/labm/neoconsole/node_modules')
var d3 = require('d3')

//Width and height
var w = 500;
var h = 100;
var barPadding = 1;


var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];


//创建SVG元素
var svg = d3.select("body")
	.append("svg")
	.attr("width", w)
	.attr("height", h);


svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x", function(d, i) {
		return i * (w / dataset.length);
	})
	.attr("y", (d, i)=>{return d})
	.attr("width", 20)
	.attr("height", 100);
