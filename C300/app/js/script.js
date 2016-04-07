jQuery(document).ready(function($) {

    if ( $(window).width() < 768 ) {
        $('.menu').hide();
    }

    $(window).resize(function() {
      if ( $(window).width() < 768 ) {
          $('.menu').hide();
      } else {
          $('.menu').show();
      }
    });

    $('.menu-icon').click(function() {
      $('.menu').slideToggle(400);
    });

    $('.menu__item').click(function() {
        if ( $(window).width() < 768 ) {
            $('.menu').hide();
        }
    });


});

