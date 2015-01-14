//window events
window.onresize = updateModalSize();
$(window).on("orientationchange", updateModalSize()); //need to test on a mobile device


//crossfilter vars
var artCollectionCrossFilter; //collection CrossFilter object
var artMediumFilter;
var artCollectionFilter;
var artMediumAccessor = function(d) {
  return d.filterMedium;
};
var artCollectionAccessor = function(d) {
  return d.collection;
};


//global vars
var collectionLength; //the length of the entire collection object
var currentLength; //the length of the filtered collection object
var countArtAdds = 0; //count of how many times the addArtToGalleryFunction has run
var artDisplayed = 0; //count of pieces displayed in gallery
var artRemaining = 0; //count of pieces not displayed in gallery
var nextArtAddIndex = 0; //index of the next piece to be loaded into the gallery
var currentArtImgIndex; //index of modal piece in collection object


//load collection object, set global & crossfilter vars and add first 8 pieces to gallary
d3.csv('/data/artCollection.csv', function(data) {
  //crossfilter vars
  artCollectionCrossFilter = crossfilter(data);
  artMediumFilter = artCollectionCrossFilter.dimension(artMediumAccessor);
  artCollectionFilter = artCollectionCrossFilter.dimension(artCollectionAccessor);
  //setup gallery
  resetAllFilters()
  showNote();
});


//helper functions
function snapshotCollection () {
  collectionLength = artCollectionCrossFilter.size();
  currentLength = artMediumFilter.top(Infinity).length;
}


function filterArtMedium (filterName) {
  //clear medium crossfilter
  artMediumFilter.filterAll();   
  //update dropdown button text
  d3.select('#medium-btn').text(filterName + " ");
  d3.select('#medium-btn').append('span')
    .attr('class', 'caret');
  //remove all images from gallery
  d3.select('#art-gallery-ul')
    .selectAll('li')
    .remove();
  //apply crossfilter
  artMediumFilter.filter(filterName); 
  //reset gallery
  snapshotCollection();
  artDisplayed = 0;
  artRemaining = currentLength;
  nextArtAddIndex = 0;
  addArtToGallery();
}


function resetAllFilters() {
  //clear all crossfilters
  artMediumFilter.filterAll();   
  artCollectionFilter.filterAll();
  //reset medium dropdown
  d3.select('#medium-btn').text("Select Medium ");
  d3.select('#medium-btn').append('span')
    .attr('class', 'caret');
  //remove all images from gallery
  d3.select('#art-gallery-ul')
    .selectAll('li')
    .remove();
  //restore Load More button
  d3.select('#more-art-btn').style('display','block');
  //reset gallery
  snapshotCollection();
  artDisplayed = 0;
  artRemaining = currentLength;
  nextArtAddIndex = 0;
  addArtToGallery();
}


function addArtToGallery () {
  var artAdded = 0;
  var artCollection = artMediumFilter.top(Infinity);
  if (artRemaining <= 8) {
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
      nextArtAddIndex++;
      artAdded++;
    }
  } else {
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
      nextArtAddIndex++;
      artAdded++;
    }
  }
  //update gallery statistics
  countArtAdds++;
  artDisplayed = artDisplayed + artAdded;
  artRemaining = currentLength - artDisplayed;
  if (currentLength === collectionLength) {
    d3.select('#art-btn-counter-top').text(artDisplayed + " of " + currentLength 
      + " pieces displayed");
    d3.select('#art-btn-counter-bottom').text('');
  } else {
    if (artDisplayed === 0) {
      d3.select('#art-btn-counter-top').text("No pieces match the selected criteria.");
      d3.select('#art-btn-counter-bottom').text('');
    } else {
      d3.select('#art-btn-counter-top').text("Displaying " + artDisplayed + " pieces");
      d3.select('#art-btn-counter-bottom').text("(" + currentLength + " of " + 
        collectionLength + " pieces match the selected criteria)");
    }
  }
  logGalleryStats(artAdded);
  //remove Load More button if artRemaining is 0
  if(artRemaining === 0){
      d3.select('#more-art-btn').style('display','none');
    } 
}


function logGalleryStats (artAdded) {
  console.log("###### Art Load #" + countArtAdds + " Stats ######");
  console.log("Pieces in collection object: " + collectionLength);
  console.log("Pieces matching current filter :" + currentLength);
  console.log("Pieces currently being displayed:  " + artDisplayed);
  console.log("Pieces added to display in this load: " + artAdded);
  console.log("Pieces left to add to display: " + artRemaining);

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



