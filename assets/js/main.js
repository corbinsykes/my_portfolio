$(document).ready(function() {
  $(window).stellar();

  var mainbottom = $('#home').offset().top + $('#home').height();

  // on scroll,
  $(window).on('scroll',function(){

      // we round here to reduce a little workload
      stop = Math.round($(window).scrollTop());
      if (stop > mainbottom) {
          $('.navbar').removeClass('navbar-default');
          $('.navbar').addClass('navbar-inverse');
      } else {
          $('.navbar').removeClass('navbar-inverse');
          $('.navbar').addClass('navbar-default');
      }

  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


});
