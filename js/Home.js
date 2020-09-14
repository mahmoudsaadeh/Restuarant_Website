
$(document).ready(function(){
    $(".hidden1").fadeIn(900).delay(200);
    $(".hidden2").fadeIn(1500);
    $(".hidden2").fadeIn(1500);

    // This will fire when document is ready:
    $(window).resize(function() {
          // This will fire each time the window is resized:
          if($(window).width() >= 770) {
              // if larger or equal
              $('#socialMediaIcons').show();
          } else {
              // if smaller
              $('#socialMediaIcons').hide();
          }
      }).resize(); // This will simulate a resize to trigger the initial run.

});