var currentIndex = 0,
    previousIndex,
    slides = $('#portfolio .portfolio-slider'),
    numberOfSlides = slides.length,
    slideAnimationRunning = false;
    
function switchSlides() {
    slideAnimationRunning = true;
    var previousSlide = $('#portfolio .portfolio-slider').eq(previousIndex),
        currentSlide = $('#portfolio .portfolio-slider').eq(currentIndex);
    previousSlide.fadeOut(1000, function() {
        currentSlide.fadeIn(1000);
        slideAnimationRunning = false;
    });
}

$(document).ready(function () {
  // Scroll Feature.
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    
    $("html, body").stop().animate({"scrollTop": $target.offset().top}, 1000, "swing");
  });
  // End of scroll feature
  
  $('#next').click(function() {
      if (slideAnimationRunning === false) {
          previousIndex = currentIndex;
          currentIndex += 1;
          if (currentIndex > numberOfSlides - 1) {
              currentIndex = 0;
          }
          switchSlides();
          }
  });
  
  $('#previous').click(function() {
      if (slideAnimationRunning === false) {
          previousIndex = currentIndex;
          currentIndex -= 1;
          if (currentIndex < 0) {
              currentIndex = numberOfSlides - 1;
          }
          switchSlides();
      }
  });
});