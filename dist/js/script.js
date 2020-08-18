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

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.cathalog-item__subheader').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символов")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Нерпавильно введён алрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+38(999) 99-99-999");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  //smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
	});
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();
});