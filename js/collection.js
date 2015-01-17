//window events
window.onresize = updateModalSize(); //resizes the modal if the screen height changes

//global configs
var randomizeCollection = 1; //controlled by randomizeConfig() with a default of random
var artAddBatchSize = 12; //count of pieces to be added per instance of addArtToGalleryFunction

//global vars
var collectionLength; //the length of the entire collection object
var currentCollection; //a snapshot of the filtered collection object
var currentLength; //the length of the filtered collection object
var countArtAdds = 0; //count of how many times the addArtToGalleryFunction has run
var artDisplayed; //count of pieces displayed in gallery
var artRemaining; //count of pieces not displayed in gallery
var nextArtAddIndex; //index of the next piece to be loaded into the gallery
var currentArtImgIndex; //index of modal piece in collection object

//dropdown maps
var mediumButtons = ['#medium-btn','#medium-btn-mobi'];
var mediumUls = ['#medium-ul', '#medium-ul-mobi'];
var mediumMap = {
  "Acrylic": "filterArtMedium('Acrylic')",
  "Collage": "filterArtMedium('Collage')",
  "Construction": "filterArtMedium('Construction')",
  "Ink": "filterArtMedium('Ink')",
  "Mixed Media": "filterArtMedium('Mixed Media')",
  "Monotype": "filterArtMedium('Monotype')",
  "Oil": "filterArtMedium('Oil')",
  "Pastel": "filterArtMedium('Pastel')",
  "Watercolor": "filterArtMedium('Watercolor')"
};
var decadeButtons = ['#decade-btn','#decade-btn-mobi'];
var decadeUls = ['#decade-ul', '#decade-ul-mobi'];
var decadeMap = {
  "1940s": "filterArtDecade('1940s')",
  "1950s": "filterArtDecade('1950s')",
  "1960s": "filterArtDecade('1960s')",
  "1970s": "filterArtDecade('1970s')",
  "1980s": "filterArtDecade('1980s')",
  "1990s": "filterArtDecade('1990s')",
  "2000s": "filterArtDecade('2000s')",
  "2010s": "filterArtDecade('2010s')",
  "Unknown": "filterArtDecade('Unknown')"
};
var statusButtons = ['#status-btn','#status-btn-mobi'];
var statusUls = ['#status-ul', '#status-ul-mobi'];
var statusMap = {
  "Available": "filterArtStatus('Available')",
  "Not Available": "filterArtStatus('Not Available')"
};
var tagButtons = ['#tag-btn','#tag-btn-mobi'];
var tagUls = ['#tag-ul', '#tag-ul-mobi'];
var tagMap = {
  "Abstract": "filterArtTag('Abstract')",
  "Black and White": "filterArtTag('Black and White')",
  "Dominican Republic": "filterArtTag('Dominican Republic')",
  "Figure": "filterArtTag('Figure')",
  "Landscape": "filterArtTag('Landscape')",
  "Letter": "filterArtTag('Letter')",
  "Monhegan": "filterArtTag('Monhegan')",
  "Path": "filterArtTag('Path')",
  "Representational": "filterArtTag('Representational')",
  "Seascape": "filterArtTag('Seascape')",
  "Still Life": "filterArtTag('Still Life')",
  "Tondo": "filterArtTag('Tondo')"
};

//crossfilter object
var artCollectionCrossFilter;

//crossfilter filters (currently 17; max of 32)
var artTitleFilter;
var artDecadeFilter;
var artStatusFilter;
var artHolderFilter;
var artMediumFilter;
var tagAbstractFilter;
var tagBlackAndWhiteFilter;
var tagDominicanRepublicFilter;
var tagFigureFilter;
var tagLandscapeFilter;
var tagLetterFilter;
var tagMonheganFilter;
var tagPathFilter;
var tagRepresentationalFilter;
var tagSeascapeFilter;
var tagStillLifeFilter;
var tagTondoFilter;

//crossfilter accessors
var artTitleAccessor = function(d) {
  return d.title;
};
var artDecadeAccessor = function(d) {
  return d.decade;
};
var artStatusAccessor = function(d) {
  return d.status;
};
var artHolderAccessor = function(d) {
  return d.holder;
};
var artMediumAccessor = function(d) {
  return d.filterMedium;
};
var abstractAccessor = function(d) {
  return d.tagAbstract;
};
var blackAndWhiteAccessor = function(d) {
  return d.tagBlackAndWhite;
};
var dominicanRepublicAccessor = function(d) {
  return d.tagDominicanRepublic;
};
var figureAccessor = function(d) {
  return d.tagFigure;
};
var landscapeAccessor = function(d) {
  return d.tagLandscape;
};
var letterAccessor = function(d) {
  return d.tagLetter;
};
var monheganAccessor = function(d) {
  return d.tagMonhegan;
};
var pathAccessor = function(d) {
  return d.tagPath;
};
var representationalAccessor = function(d) {
  return d.tagRepresentational;
};
var seascapeAccessor = function(d) {
  return d.tagSeascape;
};
var stillLifeAccessor = function(d) {
  return d.tagStillLife;
};
var tondoAccessor = function(d) {
  return d.tagTondo;
};


//load collection object, set global & crossfilter vars and add first 8 pieces to gallary
d3.csv('/data/collection.csv', function(data) {
  //update crossfilter vars
  artCollectionCrossFilter = crossfilter(data);
  artTitleFilter = artCollectionCrossFilter.dimension(artTitleAccessor);
  artDecadeFilter = artCollectionCrossFilter.dimension(artDecadeAccessor);
  artStatusFilter = artCollectionCrossFilter.dimension(artStatusAccessor);
  artHolderFilter = artCollectionCrossFilter.dimension(artHolderAccessor);
  artMediumFilter = artCollectionCrossFilter.dimension(artMediumAccessor);
  tagAbstractFilter = artCollectionCrossFilter.dimension(abstractAccessor);
  tagBlackAndWhiteFilter = artCollectionCrossFilter.dimension(blackAndWhiteAccessor);
  tagDominicanRepublicFilter = artCollectionCrossFilter.dimension(dominicanRepublicAccessor);
  tagFigureFilter = artCollectionCrossFilter.dimension(figureAccessor);
  tagLandscapeFilter = artCollectionCrossFilter.dimension(landscapeAccessor);
  tagLetterFilter = artCollectionCrossFilter.dimension(letterAccessor);
  tagMonheganFilter = artCollectionCrossFilter.dimension(monheganAccessor);
  tagPathFilter = artCollectionCrossFilter.dimension(pathAccessor);
  tagRepresentationalFilter = artCollectionCrossFilter.dimension(representationalAccessor);
  tagSeascapeFilter = artCollectionCrossFilter.dimension(seascapeAccessor);
  tagStillLifeFilter = artCollectionCrossFilter.dimension(stillLifeAccessor);
  tagTondoFilter = artCollectionCrossFilter.dimension(tondoAccessor);
  //capture collection in a global var
  //collection = artMediumFilter.top(Infinity);
  //setup gallery
  resetAllFilters()
  showNote();
});


//dropdown functions
function populateAllDropdowns () {
  populateDeskAndMobiDropdowns('mediumDropdowns', mediumUls, mediumMap);
  populateDeskAndMobiDropdowns('decadeDropdowns', decadeUls, decadeMap);
  populateDeskAndMobiDropdowns('statusDropdowns', statusUls, statusMap);
  populateDeskAndMobiDropdowns('tagDropdowns', tagUls, tagMap);
}

function populateDeskAndMobiDropdowns (dropdownSet, dropdownUls, dropdownMap) {
  var listTypes = ['std', 'mobi'];
  var dropdownKeys = d3.keys(dropdownMap);
  var dropdownValues = d3.values(dropdownMap);
  var currentMediumMatchCount;
  for (var i=0; i < dropdownUls.length; i++) {
    d3.select(dropdownUls[i])
      .selectAll('li')
      .remove();
    for (var j=0; j < dropdownKeys.length; j++) {
      if (dropdownSet === 'mediumDropdowns') {
        currentMediumMatchCount = currentCollection.filter(function(d){return d.filterMedium === dropdownKeys[j]}).length;
      } else if (dropdownSet === 'decadeDropdowns') {
        currentMediumMatchCount = currentCollection.filter(function(d){return d.decade === dropdownKeys[j]}).length;
      } else if (dropdownSet === 'statusDropdowns') {
        currentMediumMatchCount = currentCollection.filter(function(d){return d.status === dropdownKeys[j]}).length;
      } else if (dropdownSet === 'tagDropdowns') {
        switch(dropdownKeys[j]) {
          case 'Abstract':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagAbstract === 'x'}).length;
            break;
          case 'Black and White':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagBlackAndWhite === 'x'}).length;
            break;
          case 'Dominican Republic':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagDominicanRepublic === 'x'}).length;
            break;
          case 'Figure':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagFigure === 'x'}).length;
            break;
          case 'Landscape':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagLandscape === 'x'}).length;
            break;
          case 'Letter':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagLetter === 'x'}).length;
            break;
          case 'Monhegan':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagMonhegan === 'x'}).length;
            break;
          case 'Path':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagPath === 'x'}).length;
            break;
          case 'Representational':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagRepresentational === 'x'}).length;
            break;
          case 'Seascape':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagSeascape === 'x'}).length;
            break;
          case 'Still Life':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagStillLife === 'x'}).length;
            break;
          case 'Tondo':
            currentMediumMatchCount = currentCollection.filter(function(d){return d.tagTondo === 'x'}).length;
            break;
        }
      }
      if (currentMediumMatchCount >0) {
        d3.select(dropdownUls[i])
          .append('li')
          .attr('id', 'select'+dropdownKeys[j].replace(/\s+/g, '') + listTypes[i]);
        d3.select('#'+'select'+dropdownKeys[j].replace(/\s+/g, '') + listTypes[i])
          .append('a')
          .attr('href','#')
          .attr('onclick', dropdownValues[j])
          .text(dropdownKeys[j] + ' ('+currentMediumMatchCount + ')');
          dropdownText = dropdownKeys[j] + ' ('+currentMediumMatchCount + ')';
      }
      //could include dropdown selections with 0 here
    }
  }
}


//collection functions
function snapshotCollection () {
  collectionLength = artCollectionCrossFilter.size();
  currentLength = artMediumFilter.top(Infinity).length;
  if (randomizeCollection === 1) {
    currentCollection = artMediumFilter.top(Infinity);
    currentCollection = randomizeArray(currentCollection);
  } else {
    currentCollection = artMediumFilter.top(Infinity);
  }
}


//filter apply functions
function filterArtTitle () {
  var searchTitle = document.getElementById('title-search-input').value;
  if (searchTitle.length < 1) {
    alert('Please enter a title to search for...');
  } else {
    //clear title crossfilter
    artTitleFilter.filterAll();  
    //make input grey
    d3.select('#title-search-input')
      .style('color','white')
      .style('background-color', '#a2a2a2');
    //remove all images from gallery
    removeArtFromGallery();
    //apply crossfilter
    artTitleFilter.filterFunction(function(d) {
      pieceBeingSearched = d.toLowerCase();
      searchTitle = searchTitle.toLowerCase();
      if(pieceBeingSearched.search(searchTitle) > -1){
        return pieceBeingSearched;
      }
    });
    //reset gallery
    resetDropdownsAndGallery();
  }
}

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var searchTitle = document.getElementById('title-search-input').value;
    if(keycode == '13'){
      if(searchTitle.length >= 1) {
        filterArtTitle();
      }
    }
});

function filterArtDecade (selectedDecade) {
  //clear decade crossfilter
  artDecadeFilter.filterAll();  
  //update buttons
  for (var i = 0; i < decadeButtons.length; i++) {
    d3.select(decadeButtons[i]).text(selectedDecade + " ");
    d3.select(decadeButtons[i]).append('span')
      .attr('class', 'caret');
    d3.select(decadeButtons[i])
      .attr('class', 'btn btn-default btn-md dropdown-toggle btn-filtered');
  }
  //remove all images from gallery
  removeArtFromGallery();
  //apply crossfilter
  artDecadeFilter.filter(selectedDecade);
  //reset gallery
  resetDropdownsAndGallery();  
}

function filterArtStatus (selectedStatus) {
  //clear status crossfilter
  artStatusFilter.filterAll();  
  //update buttons
  for (var i = 0; i < statusButtons.length; i++) {
    d3.select(statusButtons[i]).text(selectedStatus + " ");
    d3.select(statusButtons[i]).append('span')
      .attr('class', 'caret');
    d3.select(statusButtons[i])
      .attr('class', 'btn btn-default btn-md dropdown-toggle btn-filtered');
  }
  //remove all images from gallery
  removeArtFromGallery();
  //apply crossfilter
  artStatusFilter.filter(selectedStatus);
  //reset gallery
  resetDropdownsAndGallery();
}

function filterArtMedium (selectedMedium) {
  //clear medium crossfilter
  artMediumFilter.filterAll();   
  //update buttons
  for (var i = 0; i < mediumButtons.length; i++) {
    d3.select(mediumButtons[i]).text(selectedMedium + " ");
    d3.select(mediumButtons[i]).append('span')
      .attr('class', 'caret');
    d3.select(mediumButtons[i])
      .attr('class', 'btn btn-default btn-md dropdown-toggle btn-filtered');
  }
  //remove all images from gallery
  removeArtFromGallery();
  //apply crossfilter
  artMediumFilter.filter(selectedMedium); 
  //reset gallery
  resetDropdownsAndGallery();
}

function filterArtTag (selectedTag) {
  //clear all tag crossfilter
  resetAllTagFilters();
  //update buttons
  for (var i = 0; i < tagButtons.length; i++) {
    d3.select(tagButtons[i]).text(selectedTag + " ");
    d3.select(tagButtons[i]).append('span')
      .attr('class', 'caret');
    d3.select(tagButtons[i])
      .attr('class', 'btn btn-default btn-md dropdown-toggle btn-filtered');
  }
  //remove all images from gallery
  removeArtFromGallery();
  //apply crossfilter
  switch(selectedTag) {
    case 'Abstract':
        tagAbstractFilter.filter('x');
        break;
    case 'Black and White':
        tagBlackAndWhiteFilter.filter('x');
        break;
    case 'Dominican Republic':
        tagDominicanRepublicFilter.filter('x');
        break;
    case 'Figure':
        tagFigureFilter.filter('x');
        break;
    case 'Landscape':
        tagLandscapeFilter.filter('x');
        break;
    case 'Letter':
        tagLetterFilter.filter('x');
        break;
    case 'Monhegan':
        tagMonheganFilter.filter('x');
        break;
    case 'Path':
        tagPathFilter.filter('x');
        break;
    case 'Representational':
        tagRepresentationalFilter.filter('x');
        break;
    case 'Seascape':
        tagSeascapeFilter.filter('x');
        break;
    case 'Still Life':
        tagStillLifeFilter.filter('x');
        break;
    case 'Tondo':
        tagTondoFilter.filter('x');
        break;
  } 
  //reset gallery
  resetDropdownsAndGallery();
}


//filter clear functions
function resetAllTagFilters () {
  tagAbstractFilter.filterAll();
  tagBlackAndWhiteFilter.filterAll();
  tagDominicanRepublicFilter.filterAll();
  tagFigureFilter.filterAll();
  tagLandscapeFilter.filterAll();
  tagLetterFilter.filterAll();
  tagMonheganFilter.filterAll();
  tagPathFilter.filterAll();
  tagRepresentationalFilter.filterAll();
  tagSeascapeFilter.filterAll();
  tagStillLifeFilter.filterAll();
  tagTondoFilter.filterAll();
}

function resetAllFilters() {
  //clear all crossfilters
  artTitleFilter.filterAll();
  artDecadeFilter.filterAll();
  artMediumFilter.filterAll();
  //artHolderFilter.filterAll();
  artStatusFilter.filterAll();    
  resetAllTagFilters();
  //reset title search input
  document.getElementById('title-search-input').value = '';
  d3.select('#title-search-input')
    .style('color','#4b5563')
    .style('background-color', 'white');
  //vars for dropdown resets
  var buttons = ['#medium-btn','#medium-btn-mobi','#decade-btn','#decade-btn-mobi','#tag-btn','#tag-btn-mobi','#status-btn','#status-btn-mobi'];
  var buttonsText = ['Medium ','Medium ','Decade ','Decade ','Tag ','Tag ','Availability ','Availability '];
  //reset buttons
  for (var i = buttons.length - 1; i >= 0; i--) {
  d3.select(buttons[i]).text(buttonsText[i]);
  d3.select(buttons[i]).append('span')
    .attr('class', 'caret');
  }
  for (var i = buttons.length - 1; i >= 0; i--) {
    d3.select(buttons[i])
      .attr('class', 'btn btn-default btn-md dropdown-toggle');
  }
  //remove all images from gallery
  removeArtFromGallery();
  //restore Load More button
  d3.select('#more-art-btn').style('display','block');
  //reset gallery
  resetDropdownsAndGallery();
}


//gallery functions
function addArtToGallery () {
  var artAdded = 0;
  if (artRemaining <= artAddBatchSize) {
    for (var i= artRemaining; i > 0; i--) {
      var path = currentCollection[nextArtAddIndex].directory + currentCollection[nextArtAddIndex].file;
      d3.select('#art-gallery-ul')
        .append('li')
        .attr('id', 'li'+nextArtAddIndex)
        .attr('class', 'col-lg-3 col-md-3 col-sm-4 col-xs-6');
      d3.select('#li'+nextArtAddIndex)
        .append('img')
        .attr('id', nextArtAddIndex)
        .attr('class', 'img-thumbnail thumbnail-height')
        .attr('src', path)
        .attr('title', currentCollection[nextArtAddIndex].title)
        .attr('onclick', 'showArtModal(this.id)');
      nextArtAddIndex++;
      artAdded++;
    }
  } else {
    for (var i = 0; i < artAddBatchSize ; i++) {
      var path = currentCollection[nextArtAddIndex].directory + currentCollection[nextArtAddIndex].file;
      d3.select('#art-gallery-ul')
        .append('li')
        .attr('id', 'li'+nextArtAddIndex)
        .attr('class', 'col-lg-3 col-md-3 col-sm-4 col-xs-6');
      d3.select('#li'+nextArtAddIndex)
        .append('img')
        .attr('id', nextArtAddIndex)
        .attr('class', 'img-thumbnail thumbnail-height')
        .attr('src', path)
        .attr('title', currentCollection[nextArtAddIndex].title)
        .attr('onclick', 'showArtModal(this.id)');
      nextArtAddIndex++;
      artAdded++;
    }
  }
  //update gallery statistics
  countArtAdds++;
  artDisplayed = artDisplayed + artAdded;
  artRemaining = currentLength - artDisplayed;
  logGalleryStats(artAdded);
  //update art counter
  if (currentLength === collectionLength) {
    d3.select('#art-btn-counter-top')
      .text(artDisplayed + " of " + currentLength + " pieces displayed")
      .attr('class','light-color-text');
    d3.select('#art-btn-counter-bottom')
      .text('');
    d3.select('#art-btn-counter-modal')
        .text("")
        .attr('class','light-color-text');
  } else {
    if (artDisplayed === 0) {
      d3.select('#art-btn-counter-top')
        .text("No pieces match the selected criteria.")
        .attr('class','red-text');
      d3.select('#art-btn-counter-bottom')
        .text('(' + collectionLength + " pieces in the collection)");
      d3.select('#art-btn-counter-modal')
        .text("No pieces match the selected criteria.")
        .attr('class','red-text');
    } else {
      d3.select('#art-btn-counter-top')
        .text("Displaying " + artDisplayed + " pieces")
        .attr('class','light-color-text');
      d3.select('#art-btn-counter-bottom')
        .text("(" + currentLength + " of " + collectionLength + " pieces match the selected criteria)");
      d3.select('#art-btn-counter-modal')
        .text(currentLength + " of " + collectionLength + " pieces match the selected criteria");
    }
  }
  //remove Load More button if artRemaining is 0
  if(artRemaining === 0){
      d3.select('#more-art-btn').style('display','none');
    } 
}

function removeArtFromGallery () {
  d3.select('#art-gallery-ul')
    .selectAll('li')
    .remove();
}

function resetDropdownsAndGallery () {
  snapshotCollection();
  artDisplayed = 0;
  artRemaining = currentLength;
  nextArtAddIndex = 0;
  populateAllDropdowns();
  addArtToGallery();
}

function logGalleryStats (artAdded) {
  console.log("###### Art Load #" + countArtAdds + " Stats ######");
  console.log("Pieces in collection object: " + collectionLength);
  console.log("Pieces matching current filters: " + currentLength);
  console.log("Pieces currently being displayed:  " + artDisplayed);
  console.log("Pieces added to display in this load: " + artAdded);
  console.log("Pieces left to add to display: " + artRemaining);
}


//modal functions
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
  var artYear = currentCollection[elementID].year;
  var artTitle 
    if (artYear != "") {
      artTitle = currentCollection[elementID].title + " (" + artYear + ")";
    } else {
      artTitle = currentCollection[elementID].title;
    }     
  var artPath = currentCollection[elementID].directory + currentCollection[elementID].file;     
  var artMedium = currentCollection[elementID].medium;
  var artDimensions = currentCollection[elementID].dimensions;
  var artStatus = currentCollection[elementID].status;
  //update modal html
  d3.select('.modal-header h4').text(artTitle);
  d3.select('#modal-img').remove();
  d3.select('#art-img-container')
    .append('img')
    .attr('id', 'modal-img')
    .attr('class', 'img-responsive')
    .attr('src', artPath);
  d3.select('#modal-footer-top').text(artMedium + ', ' + artDimensions);
  if (artStatus === "Available") {
    var emailTitleMediumDimensions = artTitle + ' (' + artMedium + ', ' + artDimensions + ')';
    var emailContacts;
    if (currentCollection[elementID].contact === 'kornbluthart@gmail.com') {
      emailContacts = currentCollection[elementID].contact;
    } else {
      emailContacts = currentCollection[elementID].contact + '?cc=' + 'kornbluthart@gmail.com';
    }
    d3.select('#modal-footer-bottom').text('Available: ');
    d3.select('#modal-footer-bottom')
      .append('a')
      .attr('href', 'mailto:' + emailContacts + '&Subject=' + 'Inquiry: ' + emailTitleMediumDimensions + 
        '&body=' + 'I am interested in ' + emailTitleMediumDimensions + 
        ', which I found on franceskornbluth.com; please send more information.')
      .attr('title', 'Click to email: ' + currentCollection[elementID].contact)
      .text(currentCollection[elementID].holder);
  } else {
    d3.select('#modal-footer-bottom').text("Collection " + currentCollection[elementID].holder);
  }
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


//helper functions
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

function randomizeConfig () {
  if (randomizeCollection === 0) {
    randomizeCollection = 1;
  } else {
    randomizeCollection = 0;
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
