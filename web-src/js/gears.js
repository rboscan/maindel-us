var w = 1000;
var h = 300;

var vis = d3.select("#gear")
    .append("svg:svg")
    .attr("id", "fatcircle")
    .attr("width", w)
    .attr("height", h)
    .attr("transform", function () {
        movementX = w / 2;
        movementY = h / 2;
        return "translate(" + movementX + "," + movementY + ")";
    }
    );

var circle = vis.append("circle")
    .attr("cx", 30)
    .attr("cy", 30)
    .attr("r", 40);
