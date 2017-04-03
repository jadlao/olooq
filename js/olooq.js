// Smooth scroll to any anchor specified
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Carousel code 
$(document).ready(function(){
    $('#carousel').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
      ]
    });
});