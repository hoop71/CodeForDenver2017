
// set swipe area
var carouselPage = document.getElementById("body")

// initialize hammer
var mc = new Hammer(carouselPage);

// listen for swipe left
mc.on("swipeleft", function(ev) {
    $('#carouselExampleIndicators').carousel('next')
});

// listen for swipe right
mc.on("swiperight", function(ev) {
    $('#carouselExampleIndicators').carousel('prev')
});

document.onkeydown = function checkKey(e) {
    e = e || window.event;
    // left arrow
    if (e.keyCode == '37') {
       $('#carouselExampleIndicators').carousel('prev')
    }
    // right arrow
    else if (e.keyCode == '39') {
       $('#carouselExampleIndicators').carousel('next')
    }
}