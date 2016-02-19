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
  
  //Floating label headings for the contact form.
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
  });
  
  // Closes the Menu on small devices when clicked.
  $(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function() {
      $(".navbar-toggle:visible").click();
  })
  
});