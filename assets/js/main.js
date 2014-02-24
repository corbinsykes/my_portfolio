$(document).ready(function() {
  // initializing stellar.js
  $(window).stellar();

  // defining the bottom of the top section
  var mainbottom = $('#home').offset().top + $('#home').height() - 50;

  // on scroll,
  $(window).on('scroll',function(){
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').removeClass('navbar-splash');
        $('.navbar').addClass('navbar-main');
    } else {
        $('.navbar').removeClass('navbar-main');
        $('.navbar').addClass('navbar-splash');
    }
  });

  // var s = $("#work");
  // var pos = s.position();
  // $(window).scroll(function() {
  //   var windowpos = $(window).scrollTop();
  //   if (windowpos >= pos.top) {
  //       s.addClass("stick");
  //   } else {
  //       s.removeClass("stick");
  //   }
  // });

  $(function() {
    $('a[href*=#]:not([href=#bio-carousel])').click(function() {
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
