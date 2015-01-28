window.onload = function() {
  showNote();
};

function showNote () {
  d3.selectAll("#contact-note")
    .transition()
    .duration(1600)
    .style("color", "rgb(162,162,162)");
  setInterval(function () {hideNote();}, 1200);
}

function hideNote () {
  d3.selectAll("#contact-note")
    .transition()
    .duration(1900)
    .style("color", "rgb(255, 255, 255)");
}