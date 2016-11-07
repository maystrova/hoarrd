$(document).ready(function() {
    $('.accounts-gallery').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    });




// Поиск в десктопной версии
$( "#searchIcon" ).click(function() {
  $( "#searchArea" ).toggleClass( "md-none" );
});