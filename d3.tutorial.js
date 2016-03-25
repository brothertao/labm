//:focus-main
neoconsole.windows.canvas.toggleDevTools()
neoconsole.windows.canvas.webContents.insertCSS(utils.clip())
utils.btc()
utils.dict('inevitably')
utils.dict('gazillion')
utils.dict('institutionalize')
utils.dict('perimeter')
utils.dict('autonomy')
utils.dict('premise')
24-29 6
1-15 15
21

5*6*21
var a = 's .jpg'
var b = {}
b[a] = 1
b

//:newwindow:canvas
//init
//:line-config {"name":"d3"}
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

svg.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });
var p = d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });
p.exit().remove()
p
p.enter().append("p")
    .text(function(d) { return d; });

		d3.selectAll("p").style("color", function() {
		  return "hsl(" + Math.random() * 360 + ",100%,50%)";
		});

		d3.selectAll("p")
		    .data([4, 8, 15, 16, 23, 42])
		    .style("font-size", function(d) {d=d+10; return d + "px"; });


				d3.select("body").selectAll("li")
				    .data([4, 8, 15, 16, 23, 42])
				  .enter().append("li")
				    .text(function(d) { return "I’m number " + d + "!"; });

d3.select("body").selectAll("p").exit().remove()
d3.version
