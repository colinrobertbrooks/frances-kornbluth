//window events
window.onresize = updateModalSize();
$(window).on("orientationchange", updateModalSize()); //need to test on a mobile device


//global vars
var collectionLength; //length of collection object
var artDisplayed; //count of pieces displayed in gallery
var artRemaining; //count of pieces not displayed in gallery
var countArtAdds //count of how many times the addArtToGalleryFunction has run
var nextArtAddIndex; //index of the next piece to be loaded in the collection object
var currentArtImgIndex; //index of modal piece in collection object


//crossfilter vars
var artCollectionCrossFilter; //collection CrossFilter object
var artMediumFilter; //filters to which you add .filter() or .filterAll()
var artMediumAccessor = function(d) { //accessor for artMediumFilter
  return d.filterMedium;
};
//artMediumFilter.top(Infinity);   //everything in the artCollectionCrossfilter object
//artMediumFilter.filter('Oil');   //filter to a medium
//artMediumFilter.filterAll();     //clear filter


//load collection object, set global & crossfilter vars and add first 8 pieces to gallary
d3.csv('/data/artCollection.csv', function(data) {
  //crossfilter vars
  artCollectionCrossFilter = crossfilter(data);
  artMediumFilter = artCollectionCrossFilter.dimension(artMediumAccessor);
  //global vars
  collectionLength = artCollectionCrossFilter.size();
  artDisplayed = 0;
  artRemaining = collectionLength;
  countArtAdds = 0;
  nextArtAddIndex = 0;
  addArtToGallery();
  showNote();
});


//helper functions
function addArtToGallery () {
  var artCollection = artMediumFilter.top(Infinity);
  var artAdded = 0;
  //contingency in case the Load More Art button isn't removed correctly
  if(artDisplayed === collectionLength) {
    alert("There is no more art to load.");
  } else {
    //proceed with adding art in increments of 8
    if (artRemaining < 8) {
      //adding protocol if less than 8 pieces remain
      for (var i= artRemaining; i > 0; i--) {
        var path = artCollection[nextArtAddIndex].directory + artCollection[nextArtAddIndex].file;
        d3.select('#art-gallery-ul')
          .append('li')
          .attr('id', 'li'+nextArtAddIndex)
          .attr('class', 'col-lg-3 col-md-3 col-sm-4 col-xs-6');
        d3.select('#li'+nextArtAddIndex)
          .append('img')
          .attr('id', nextArtAddIndex)
          .attr('class', 'img-thumbnail thumbnail-height')
          .attr('src', path)
          .attr('title', artCollection[nextArtAddIndex].title)
          .attr('onclick', 'showArtModal(this.id)');
      artAdded = artAdded + 1;
      nextArtAddIndex = nextArtAddIndex + 1;
      }
    } else {
      //adding protocol for 8 pieces at a time
      for (var i = 0; i < 8; i++) {
        var path = artCollection[nextArtAddIndex].directory + artCollection[nextArtAddIndex].file;
        d3.select('#art-gallery-ul')
          .append('li')
          .attr('id', 'li'+nextArtAddIndex)
          .attr('class', 'col-lg-3 col-md-3 col-sm-4 col-xs-6');
        d3.select('#li'+nextArtAddIndex)
          .append('img')
          .attr('id', nextArtAddIndex)
          .attr('class', 'img-thumbnail thumbnail-height')
          .attr('src', path)
          .attr('title', artCollection[nextArtAddIndex].title)
          .attr('onclick', 'showArtModal(this.id)');
      artAdded = artAdded + 1;
      nextArtAddIndex = nextArtAddIndex + 1;
      }
    }
    //update global vars
    artDisplayed = artDisplayed + artAdded;
    artRemaining = artRemaining - artAdded;
    countArtAdds = countArtAdds + 1;
    //update art-btn-counter
    d3.select('#art-btn-counter p').text(artDisplayed + " of " + collectionLength + " pieces displayed");
    //remove Load More Art button if there's no more art
    if(artDisplayed === collectionLength){
      d3.select('#more-art-btn').remove();
    } 
    //console logging function 
    logGalleryStats(artAdded);
  }
}


function showArtModal (elementID) {
  //update global vars
  currentArtImgIndex = Number(elementID);
  //update and resize modal
  updateModalHTML(elementID);
  updateModalSize();
  //show modal
  $('#artModal').modal();
}


function logGalleryStats (artAdded) {
  console.log("###### Art Load #" + countArtAdds + " Stats ######");
  console.log("Pieces in collection object: " + collectionLength);
  console.log("Pieces currently being displayed:  " + artDisplayed);
  console.log("Pieces added to display in this load: " + artAdded);
  console.log("Pieces left to add to display: " + artRemaining);
}


function updateModalHTML (elementID) {
  //html vars
  var artCollection = artMediumFilter.top(Infinity);
  var artTitle = artCollection[elementID].title;       
  var artPath = artCollection[elementID].directory + artCollection[elementID].file;     
  var artMedium = artCollection[elementID].medium;
  var artDimensions = artCollection[elementID].dimensions;
  var artCollector = artCollection[elementID].collection;
  //update modal html
  d3.select('.modal-header h4').text(artTitle);
  d3.select('#modal-img').remove();
  d3.select('#art-img-container')
    .append('img')
    .attr('id', 'modal-img')
    .attr('class', 'img-responsive')
    .attr('src', artPath);
  d3.select('#modal-footer-top').text(artMedium + ', ' + artDimensions);
  d3.select('#modal-footer-bottom').text('Collection ' + artCollector);
}


function updateModalSize () {
  var currentScreenHeight = $( window ).height();
  var modalContentMaxHeight = currentScreenHeight * .82;
  var modalImgMaxHeight = currentScreenHeight * .5;
  $('.modal-content').css('max-height', modalContentMaxHeight);
  $('#modal-img').css('max-height', modalImgMaxHeight);
}


function prevArt () {
  //update global vars
  if (currentArtImgIndex === 0) {
    currentArtImgIndex = artDisplayed-1;
  } else {
    currentArtImgIndex = currentArtImgIndex-1;
  }
  //update and resize modal
  updateModalHTML(currentArtImgIndex);
  updateModalSize();
}


function nextArt () {
  //update global vars
  if (currentArtImgIndex === artDisplayed-1) {
    currentArtImgIndex = 0;
  } else {
    currentArtImgIndex = currentArtImgIndex+1;
  }
  //update and resize modal
  updateModalHTML(currentArtImgIndex);
  updateModalSize();
}


function showNote () {
  d3.selectAll("#note")
    .transition()
    .duration(1600)
    .style("color", "rgb(162,162,162)");
  setInterval(function () {hideNote();}, 1200);
}


function hideNote () {
  d3.selectAll("#note")
    .transition()
    .duration(1900)
    .style("color", "rgb(255, 255, 255)");
}



