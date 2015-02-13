d3.csv('/data/collection.csv', function(data) {
  var allArt = data.length;
  var availableArt = data.filter(function(d){return d.status === "Available"}).length;
  d3.select('#allCount').text(allArt);
  d3.select('#availCount').text(availableArt);
});