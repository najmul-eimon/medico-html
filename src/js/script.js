$(function(){
  "use strick";

  /*======================== Mobile menu toggle ===========================*/
  $('.menu-toggle').on('click', function(){
    $('body').addClass('scroll-lock');
    $('.mobile-menu').removeClass('-left-[320px]').addClass('left-0');
    $('.mobile-overlay').removeClass('opacity-0, invisible').addClass('opacity-100 visible');
  });

  $('.close-menu, .mobile-overlay').on('click', function(){
    $('body').removeClass('scroll-lock');
    $('.mobile-menu').addClass('-left-[320px]').removeClass('left-0');
    $('.mobile-overlay').addClass('opacity-0, invisible').removeClass('opacity-100 visible');
  });

  /*======================== Doctors qualification more ===========================*/
  $('.qualification-more').on('click', function(){
    $(this).parent().parent().find('.qualification').removeClass('hidden');
    $(this).addClass('hidden');
  });

  /*======================== Counter up ===========================*/
  var counterUp = document.querySelector('#counter')
  var counted = 0;
  $(window).scroll(function() {

    if(counterUp){
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      counted = 1;
    }
  }
  });

  /*======================== Video popup ===========================*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  /*======================== Filter select dropdown ===========================*/
  $(document).ready(function() {
    $('.filter-select').select2();
  });

  /*======================== Search field hide/show ===========================*/
  if(window.innerWidth > 1023){
    $('.search-blog-btn').on('click', function(){
      $('.search-blog-input').toggleClass('!w-[400px] xl:!w-[482px] pr-4');
    });
  }

  /*======================= blog tab filtering ========================*/
  $('.blog-filter-btns button').on('click', function (event) {
    const parentName = $(this).parent().attr("class");

    $(this).parent().siblings('.active').removeClass('active');
    $(this).parent().addClass('active');

  });

  var blogContainer = document.querySelector('#blog-container');
  if(blogContainer){
    var mixer1 = mixitup(blogContainer, {
      animation: {
        duration: 600
      }
    });
  }
  
})