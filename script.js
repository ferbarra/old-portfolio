var currentIndex = 0,
    slides = $('#portfolio .portfolio-slider'),
    numberOfSlides = slides.length;
    
function switchSlides() {
    var currentSlide = $('#portfolio .portfolio-slider').eq(currentIndex);
    slides.hide();
    currentSlide.fadeIn(1000);
    
}

$(document).ready(function () {
  // Scroll Feature.
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    
    $("html, body").stop().animate({"scrollTop": $target.offset().top}, 1000, "swing");
  });  // End of scroll feature
  
  $('#next').click(function() {
      currentIndex += 1;
      if (currentIndex > numberOfSlides - 1) {
          currentIndex = 0;
      }
      switchSlides();
  });
  
  $('#previous').click(function() {
      currentIndex -= 1;
      if (currentIndex < 0) {
          currentIndex = numberOfSlides - 1;
      }
      switchSlides();
  });
});
