var splashImages = [
  {link:"/frances_kornbluth/images/carousel/splash_1.jpg", title:"Summer's Vocabulary #1 (1959)"},
  {link:"/frances_kornbluth/images/carousel/splash_2.jpg", title:"Squares (1965)"},
  {link:"/frances_kornbluth/images/carousel/splash_3.jpg", title:"November (1957)"},
  {link:"/frances_kornbluth/images/carousel/splash_4.jpg", title:"Ocean (1985)"},
  {link:"/frances_kornbluth/images/carousel/splash_5.jpg", title:"The Rush of Summer (1958)"},
  {link:"/frances_kornbluth/images/carousel/splash_6.jpg", title:"To the City (1956)"},
  {link:"/frances_kornbluth/images/carousel/splash_10.jpg", title:"The Outsider (1959)"},
  {link:"/frances_kornbluth/images/carousel/splash_11.jpg", title:"Red Rock, Green Sea (1963)"},
  {link:"/frances_kornbluth/images/carousel/splash_12.jpg", title:"Island Imagery #1 (1968)"},
  {link:"/frances_kornbluth/images/carousel/splash_13.jpg", title:"Low Tide (1955)"},
  {link:"/frances_kornbluth/images/carousel/splash_14.jpg", title:"Children in the Garden (1960)"}
];

/*
  {link:"/images/carousel/splash_7.jpg", title:"Still Life (1956)"}
  {link:"/images/carousel/splash_8.jpg", title:"Rock, Sea and Sky (1960)"}
  {link:"/images/carousel/splash_9.jpg", title:"Edge of the Sea (1959)"}
  {link:"/images/carousel/splash_15.jpg", title:"Funeral (1956)"}
*/

d3.csv('/frances_kornbluth/data/collection.csv', function(data) {
  var allArt = data.length;
  var availableArt = data.filter(function(d){return d.status === "Available"}).length;
  d3.select('#allCount').text(allArt);
  d3.select('#availCount').text(availableArt);
  loadSplashImages();
});

function loadSplashImages () {
  splashImages = randomizeArray(splashImages);
  for (var i=0; i < 5; i++) {
    d3.select('#capt'+i).text('Detail from ' + splashImages[i].title);
    d3.select('#img'+i).style('background-image', 'url(' + splashImages[i].link + ')');

  }
}

function randomizeArray (array) {
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array;
}
