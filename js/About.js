



/*    $("#fullScreen").click(function () {
          //alert("test");
          //openFullscreen(document.getElementsByClassName("imgShow"));
          //document.getElementsByClassName("imgShow").webkitRequestFullscreen();

          openFullscreen();
          
      });*/
/*
      $(".mySlides").hover(function() {
          $(this).css("cursor", "zoom-in");
          //$(this).css({transform: scale(2.5)});
      }, function() {
          $(this).css("cursor", "zoom-out");
      });*/

/*
      $(".imgShow").click(function() {
          //alert('jdsn');
          
          if($(this).css("transform", "scale(5)")) {
            $(this).css("transform", "scale(2.5)");
          }
          else {
            //not workin
            $(this).css("transform", "scale(1)");
          }
    
          
      });*/
/*
      mediumZoom(".imgShow", {
           margin: -50,
           background: '#000',
           scrollOffset: 200
      });*/

/*
      $(document).on('keyup',function(evt) {
          if (evt.keyCode == 27) {
            closeModal();
          }
      });


      $(".modal").scroll(function() {
        closeModal();
      });


      $(".close").click(function() {
        closeModal();
      });


      $(".prev").click(function() {
        plusSlides(-1);
      });


      $(".next").click(function() {
        plusSlides(1)
      });
*/



/*photo swipe jquery plugin*/
      $(".imgCon").click(function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [
            {
                src: "./images/ourstory1.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine7.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine6Resized.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine3.jpg",
                w: 1920,
                h: 1280
            }
        ];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: this.getAttribute('data-value') // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

        //alert(this.getAttribute('data-value'));

      });



/*images hover effect */
      $(".imgCon").hover(function() {
        // this is the mouseenter event
        //$(this).css("opacity", 0.6);
        $(".hoverableImg", this).css("filter", "brightness(70%)");
        $(".fa-plus-circle", this).css("filter", "brightness(90%)");

        $(".hoverableImg", this).css("transition-duration", "0.6s");

        //$(".fa-plus-circle", this).show();
        $(".fa-plus-circle", this).fadeIn("0.6s");
        $(".fa-plus-circle", this).css("color", "white");

      }, function(){
        // this is the mouseleave event
        //$(this).css("opacity", 1);
        $(".hoverableImg", this).css("filter", "brightness(100%)");

        $(".hoverableImg", this).css("transition-duration", "0.2s");

       // $(".fa-plus-circle", this).hide();
        $(".fa-plus-circle", this).fadeOut("0.2s");
        
      });


      var swiper = new Swiper('.swiper-container');

/*
      function openFullscreen() {
          var elem = document.documentElement;

          if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
            document.body.style.overflow = "hidden";
          }
          if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
              document.body.style.overflow = "hidden";
          }
      }
   
      // Open the Modal
      function openModal() {
        document.getElementById("myModal").style.display = "block";
      }

      // Close the Modal
      function closeModal() {
        document.getElementById("myModal").style.display = "none";
        document.body.style.overflow = "auto"; 
      }

      var slideIndex = 1;
      //showSlides(slideIndex);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
          slideIndex = 1
        }

        if (n < 1) {
          slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
      
        slides[slideIndex-1].style.display = "block";
      }

*/
