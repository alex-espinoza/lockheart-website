var frontPageHeader = document.getElementsByClassName("front-page-header")[0];
var headerSpans = frontPageHeader.getElementsByTagName("span");

function createSpanDisplayTimeout(startTime, element) {
  setTimeout(function() {
    headerSpans[element].className += "display";
  }, startTime);
}

for (var i = 0; i < headerSpans.length; i++) {
  var initialDelayTime = 1000;
  var offsetTime = i * 2000;
  var startTime = initialDelayTime + offsetTime;

  createSpanDisplayTimeout(startTime, i);
}
