$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrow_l.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrow_r.svg"></button>',
        arrows: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 425,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 375,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 320,
                settings: {
                  arrows: false,
                  dots: true
                }
              }
          ]
    }); 
  });