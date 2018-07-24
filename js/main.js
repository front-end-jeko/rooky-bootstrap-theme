// scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// header animate
$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('#header').addClass('fixed');
        }
        else {
            $('#header').removeClass('fixed');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});




function navFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " open";
    } else {
        x.className = "navigation";
    }

    var y = document.querySelector(".nav-toggle");
    y.classList.toggle("change");
}


// Owl Carousel
	
      $("#owl-demo").owlCarousel({
		  autoPlay : true,
        pagination: false,
		navigation : false
		
      });