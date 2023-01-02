$(function(){
  "use strick";

  $('.menu-toggle').on('click', function(){
    $('body').addClass('scroll-lock');
    $('.mobile-menu').removeClass('-left-[320px]');
    $('.mobile-menu').addClass('left-0');
    $('.mobile-overlay').removeClass('opacity-0, invisible');
    $('.mobile-overlay').addClass('opacity-100 visible');
  });

  $('.close-menu, .mobile-overlay').on('click', function(){
    $('body').removeClass('scroll-lock');
    $('.mobile-menu').addClass('-left-[320px]');
    $('.mobile-menu').removeClass('left-0');
    $('.mobile-overlay').addClass('opacity-0, invisible');
    $('.mobile-overlay').removeClass('opacity-100 visible');
  });
  
})