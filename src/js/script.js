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
      $('.search-blog-input').toggleClass('!w-[350px] xl:!w-[482px] pr-4');
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

  /*======================= date time picker ========================*/
  $('#demo').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    // hours12:true,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onSelectDate:function () {
      $('.xdsoft_timepicker').addClass('active');
    },
  });

  $('.xdsoft_timepicker').prepend('<p class="available_time">Available from 3:00 PM - 11.00 PM</p>');

  $('.xdsoft_timepicker').removeClass('active');
  
    
  /*======================= appointment multi step ========================*/
  var current_fs, next_fs, previous_fs;

  // Next button
  $(".next-button").click(function(){

  current_fs = $(this).parent().parent();
  next_fs = $(this).parent().parent().next();

  $(current_fs).removeClass("show");
  $(next_fs).addClass("show");
  previous_fs = $(".show").prev();

  $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");
  $("#progressbar li").eq($(".card2").index(previous_fs)).addClass("checked");

  current_fs.animate({}, {
    step: function() {

      current_fs.css({
        'display': 'none',
      });

      next_fs.css({
        'display': 'block'
      });
      }
    });
  });

  // Previous button
  $(".prev-button").click(function(){

  current_fs = $(".show");
  previous_fs = $(".show").prev();

  $(current_fs).removeClass("show");
  $(previous_fs).addClass("show");

  $("#progressbar li").eq($(".card2").index(current_fs)).removeClass("active");
  $("#progressbar li").eq($(".card2").index(previous_fs)).removeClass("checked");

    current_fs.animate({}, {
      step: function() {

      current_fs.css({
        'display': 'none',
      });

      previous_fs.css({
        'display': 'block'
      });
      }
    });
  });

  /*======================= attach file ========================*/
  var applyFiles = function() {
    if (this.files.length <= 0) {
      $('.choosen').html('No file choosen.');
    } else {
      $('.choosen').empty();
      
      for (var i = 0; i < this.files.length; ++i) {
        $('.choosen').html(this.files[i].name);
      }
    }
  }

  $('input[type="file"]').each(function() {
    applyFiles.call(this);
  }).change(function() {
    applyFiles.call(this);
  });

  /*======================= register/login tab ========================*/
  // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    var regBtn = document.getElementById('regBtn');

    // Click function
    $('#tabs-nav li').click(function(){
      $('#tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      
      if(activeTab === '#tab1'){
        regBtn.innerHTML = 'Register'
      }
      else{
        regBtn.innerHTML = 'Login'
      }
      return false;
    });

    /*======================= input password ========================*/
    $('.eye-btn').on('click', function() {
        
      if ($('.input-psswd').attr('psswd-shown') == 'false') {
        $('.input-psswd').removeAttr('type');
        $('.input-psswd').attr('type', 'text');
        
        $('.input-psswd').removeAttr('psswd-shown');
        $('.input-psswd').attr('psswd-shown', 'true');
        
        $('.eye-off').addClass('hidden');
        $('.eye-on').removeClass('hidden'); 
      }
      else {
        $('.input-psswd').removeAttr('type');
        $('.input-psswd').attr('type', 'password');
        
        $('.input-psswd').removeAttr('psswd-shown');
        $('.input-psswd').attr('psswd-shown', 'false');
        
        $('.eye-on').addClass('hidden');
        $('.eye-off').removeClass('hidden');
      }
  });
  
});