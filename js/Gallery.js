
    
    //https://photoswipe.com/documentation/options.html
    //https://stackoverflow.com/questions/29461380/why-would-the-zoom-button-not-show-up-in-photoswipe
    //https://photoswipe.com/documentation/getting-started.html
    //https://github.com/dimsemenov/PhotoSwipe/tree/master/dist/default-skin
    //https://photoswipe.com/

    $(".imgCon").hover(function() {
            // this is the mouseenter event

            $(".hoverableImg", this).css("filter", "brightness(60%)");
            $(".fa-plus-circle", this).css("filter", "brightness(80%)");

            $(".hoverableImg", this).css("transition-duration", "0.6s");

            $(".fa-plus-circle", this).fadeIn("0.6s");
            $(".fa-plus-circle", this).css("color", "white");

        }, function(){
            // this is the mouseleave event

            $(".hoverableImg", this).css("filter", "brightness(100%)");

            $(".hoverableImg", this).css("transition-duration", "0.2s");

            $(".fa-plus-circle", this).fadeOut("0.2s");
            
        });









        





    $(".imgCon").click(function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [
            {
                src: "./images/oshine1.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine2.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine3.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine4.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine5.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine6.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine7.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine8.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine9.jpg",
                w: 1920,
                h: 1280
            },
            {
                src: "./images/oshine10.jpg",
                w: 1920,
                h: 1280
            },
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
