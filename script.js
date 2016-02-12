var currentIndex = 0,
    slides = $('.container .portfolio-slider'),
    numberOfSlides = slides.length;
    
function switchSlides() {
    var slide = slides.eq(currentIndex);
}

$(document).ready(function () {
  // Scroll Feature.
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    
    $("html, body").stop().animate({"scrollTop": $target.offset().top}, 1000, "swing");
  });  // End of scroll feature
});