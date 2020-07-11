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
  
  $('ul.cathalog__tabs').on('click', 'li:not(.cathalog__tab_active)', function() {
    $(this)
      .addClass('cathalog__tab_active').siblings().removeClass('cathalog__tab_active')
      .closest('div.container').find('div.cathalog__content').removeClass('cathalog__content_active').eq($(this).index()).addClass('cathalog__content_active')
  });

  function toggleSlige(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.cathalog-item__content').eq(i).toggleClass('cathalog-item__content_active');
        $('.cathalog-item__list').eq(i).toggleClass('cathalog-item__list_active');
      })
    });
  };

  toggleSlige('.cathalog-item__link');
  toggleSlige('.cathalog-item__back');
});