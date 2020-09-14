/*Got to top button*/
    
    //Get the button

    //var mybutton = document.getElementById("myBtn");

    $("#myBtn").click(function() {
        topFunction();
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //mybutton.style.display = "block";
            $("#myBtn").fadeIn();
        } 
        else {
            //mybutton.style.display = "none";
            $("#myBtn").fadeOut();
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        $('html, body').animate({scrollTop:0}, "slow");
        /* document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;*/
    }