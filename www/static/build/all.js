// Manifest: assets/js/all.json

$(function(){
  admissionsNav();
  admissionsNavMobile();
  programsMenuMobile();
  faq();
});

$(document).ready(function () {
  var menu_visible = false;

  $(".navbar-toggle").click(function(){
    if (menu_visible === false) {
      $("nav").toggleClass("navbar-open");
      $(".mainLogo").hide();
      $(".whiteLogo").show();
      menu_visible = true;
    }else{
      $("nav").toggleClass("navbar-open");
      $(".mainLogo").show();
      $(".whiteLogo").hide();
      menu_visible = false;
    };
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("body").scrollspy({target: "#navbar", offset: 280});

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        scrollNN = definescroll();
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - scrollNN
          }, 1000);
          return false;
        }
      }
    });

    $('#dropdown-mobile li a').click(function() {
      var newText = $(this).text();
      $('body').trigger("click");
      $('#dropdown-mobile-button').html(newText + ' <span class="caret"></span>');

    });
  });

  $(document).on("scroll", onScroll);

});

function admissionsNav(){
  if($("#admissions-nav").length) {
    $('#admissions-nav nav').affix({
      offset: {     
        top: $('#admissions-nav nav').offset().top - 101,
      }
    });
  }
}

function admissionsNavMobile(){
  if($("#admissions-navm").length) {
    $('#admissions-navm').affix({
      offset: {     
        top: $('#admissions-navm').offset().top - 101,
      }
    });
  }
}

function definescroll() {
  var windowWidth = $(window).width();
  if (windowWidth > 767) {
    return 100;
  }
  return 115;
}

function programsMenuMobile(){
  if($("#programs-menu-mobile").length) {
    $('#programs-menu-mobile').affix({
      offset: {     
        top: $('.programs-tabs').offset().top - 106,
      }
    });
  }
}

function faq(){
  $(".question").click(function(){
   $(this).next(".answer").fadeToggle();
   $(this).toggleClass('question-open');
 });
}

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.aplication-main section').each(function () {
    var currLink = $(this);
    if (currLink.position().top <= scrollPos + 200 && currLink.position().top + currLink.height() > scrollPos) {
      var newText = $(currLink).attr("data-section");
      $('#dropdown-mobile-button').html(newText + ' <span class="caret"></span>');
    } else if (scrollPos < 500) {
      $('#dropdown-mobile-button').html('APPLICATION PROCESS <span class="caret"></span>');
    }
  });
}


;(function(window,$,undefined) {

  function ready() {
    var bajando = false, subiendo = false;
    var heightHero = $('.hero').height();
   
    $('html').on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        bajando = true;
        subiendo = false;
      } else if (e.originalEvent.wheelDelta > 0) {
        bajando = false;
        subiendo = true;
      }

      if ($(window).scrollTop() > 1) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
          //scroll down
          //$( ".mainNav" ).addClass( "hide-nav-bar" );
          //$(".affix").addClass("affix-top");
        } else if (e.originalEvent.wheelDelta > 0) {
          //scroll up
          //$( ".mainNav" ).removeClass( "hide-nav-bar" );
          //$(".affix").removeClass("affix-top");
        } else if (e.originalEvent.wheelDelta == 0) {
          if (bajando) {
            //$( ".mainNav" ).addClass( "hide-nav-bar" );
            //$(".affix").addClass("affix-top");
          }else if (subiendo) {
            //$( ".mainNav" ).removeClass( "hide-nav-bar" );
            //$(".affix").removeClass("affix-top");
          }
        }
        $('.mainNav').addClass('small');
        //$('.mainNav').addClass('navbar-fixed-top');
        //$('.hero').not(".heroHome").addClass('navbar-fixed-top-hero');
      } else {

        $('.mainNav').removeClass('small');
        //$('.mainNav').removeClass('navbar-fixed-top');
        //$('.hero').not(".heroHome").removeClass('navbar-fixed-top-hero');
        // if ($(window).scrollTop() > (heightHero * 0.95) && subiendo) {
        //   $( ".mainNav" ).addClass( "hide-nav-bar" );
        // }

        // if ($(window).scrollTop() < (heightHero * 0.9) && subiendo) {
        //   $('.mainNav').removeClass('small');
        //   $('.mainNav').removeClass('navbar-fixed-top');
        //   $('.hero').not(".heroHome").removeClass('navbar-fixed-top-hero');
        // }

        // if($(window).scrollTop() > (heightHero * 0.3) && bajando) { 
        //   $( ".mainNav" ).addClass( "hide-nav-bar" );
        // }else if($(window).scrollTop() < (heightHero * 0.3)) {
        //   $( ".mainNav" ).removeClass( "hide-nav-bar" );
        // }
      }
    });

  }

  $(document).ready(function(){
    if($('.mainNav ').size()) {
      ready();

      if ($(window).scrollTop() > 300) {
        $(".affix").addClass("affix-top");
      }
    }
  });

})(window,jQuery);
$(document).ready(function() {
  var windowWidth = $(window).width(),
      heroHeight  = $('.hero_section').outerHeight();

  $('.why-us-hero-particles').height(heroHeight);

  if (windowWidth > 767) {
    /* IMPORTANT: Particles management is *extremely WET*, needs refactoring ASAP */
    // Load particles for the first time if they're inside of the above-the-fold area
    $('[id*="particles"]:in-viewport').each(function(index) {
      particlesJS.load($(this).attr('id'), $(this).attr('data-particles'), function() {
        $('[id*="particles"]:not(:empty)').addClass('particlesJS-loaded');
      });
      // console.log($(this).attr('id') + ' loaded');
    });

    $(window).on('scroll', function() {
      if ($('[id*="particles"]:not(.particlesJS-loaded):in-viewport').size() > 0) {
        // If particles aren't already initialized and they are in a visible area, initialize them
        $('[id*="particles"]:not(.particlesJS-loaded):in-viewport').each(function(index) {
          particlesJS.load($(this).attr('id'), $(this).attr('data-particles'), function() {
            $('[id*="particles"]:not(:empty)').addClass('particlesJS-loaded');
          });
        });
      } else if ($('.particlesJS-loaded:in-viewport').size() > 0) {
        // If particles are already initialized and they are in a visible area, make them visible
        $('.particlesJS-loaded:in-viewport').each(function(index) {
          $(this).removeClass('visibility-hidden');
          // console.log($(this).attr('id') + ' shown');
        });
      } else {
        // If particles are already initialized but aren't in a visible area, hide them
        $('.particlesJS-loaded').each(function(index) {
          $(this).addClass('visibility-hidden');
          // console.log($(this).attr('id') + ' hidden');
        });
      }
    });
  }
});

;(function(window,$,undefined) {

  function ready() {
    $('.program-circles .program-circle-parent').on('click', function() { 
      window.location.href = 'programs.html#infant'; 
    });

    $('.program-circles .program-circle-toddler').on('click', function() { 
      window.location.href = 'programs.html#toddler'; 
    });

    $('.program-circles .program-circle-primary').on('click', function() { 
      window.location.href = 'programs.html#primary'; 
    });

    $('.program-circles .program-circle-elementary').on('click', function() { 
      window.location.href = 'programs.html#elementary'; 
    });

    $('.program-circles .program-circle-adolescent').on('click', function() { 
      window.location.href = 'programs.html#adolescent'; 
    });

    $('.program-circles .program-circle-phisical').on('click', function() { 
      window.location.href = 'programs.html#phisycal_education'; 
    });

    $('.program-circles .program-circle-spanish').on('click', function() { 
      window.location.href = 'programs.html#bilingual'; 
    });

    $('.program-circles .program-circle-before').on('click', function() { 
      window.location.href = 'programs.html#before_after_care'; 
    });

    
  }

  $(document).ready(function(){
    if($('.program-circles').size()) {
      ready();
    }
  });

})(window,jQuery);
$(document).ready(function(){
  if($('#programs-content').size()) {

    var slides = ['infant', 'toddler', 'primary', 'elementary', 'adolescent', 'bilingual', 'physical_education', 'before_after_care'];
    var hash = location.hash.replace('#','');
    var a = slides.indexOf(hash);
    if (a >= 0) {
      $('html, body').animate({
        scrollTop: $('.programs-tabs').offset().top - 120
      }, 500);
    }else if (a == -1) {a = 0}

    slick(slides, a);
  }
});

function slick(slides, a){

  var option, slider;
  option = $('.programs-nav .option');
  slider = $('#programs-content .slider');

  option.on('click', function() {
    var slide, that;
    var hash = location.hash.replace('#','');

    that = $(this);
    slide = that.attr('slide');
    option.removeClass('is-active');
    slider.slick('slickGoTo', slide);

    $('html, body').animate({
      scrollTop: $('.programs-tabs').offset().top - 151
    }, 500);

    location.hash = slides[slide];

    return that.addClass('is-active');
  });

  $('#programs-content .slider').slick({
    arrows: false,
    dots: false,
    swipe: false,
    fade: true,
    adaptiveHeight: true,
    responsive: [
      {
      breakpoint: 767,
      settings: {
        arrows: false,
        // asNavFor: '.programs-nav_mobile',
        centerMode: false,
        focusOnSelect: false
        }
      }
    ]
  });

  $(window).on('load', function() {
    var asNavForValue = [
      {
      breakpoint: 767,
      settings: {
        asNavFor: '.programs-nav_mobile'
        }
      }
    ];
    $('#programs-content .slider').slick('slickSetOption', 'responsive', asNavForValue, true);
  });

  $('#programs-content .slider').slick('slickGoTo', a);

  $('.programs-nav .option').each(function() {
    slide = $(this).attr('slide');
    if (slide == a) {$(this).addClass('is-active')} else {$(this).removeClass('is-active');}

  });

  $('.programs-nav_mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '#programs-content .slider',
    centerMode: false,
    arrows: false,
    focusOnSelect: false,
  });

  $('.programs-nav_mobile').slick('slickGoTo', a);

  $('.back').click(function(){
    $("#programs-content .slider").slick("slickPrev");
  });

  $('.next').click(function(){
    $("#programs-content .slider").slick("slickNext");
  });
}

;(function(window,$,undefined) {

  function ready() {
    var config = {
      viewFactor : 0.15,
      duration   : 1000,
      distance   : "0px",
      scale      : 0.1
    };

    window.sr = ScrollReveal( config );

    sr.reveal( ".program-circles-b .program-circle.seq1", { reset: false, delay: 100, viewOffset: { top: 50 } });
    sr.reveal( ".program-circles-b .program-circle.seq2", { reset: false, delay: 300, viewOffset: { top: 50 } } );
    sr.reveal( ".program-circles-b .program-circle.seq3", 
      { 
        reset: false, 
        delay: 500, 
        viewOffset: { top: 50 },
        afterReveal : function(e) {
          $('.program-circle').addClass('anim');
        }
      });
  }

  $(document).ready(function(){
    if($('.program-circles-b').size()) {
      ready();
    }
  });

})(window,jQuery);
;(function(window,$,undefined) {

  function ready() {
    $('#slider1').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: true,
      responsive: [
        {
        breakpoint: 767,
        settings: {
          autoplay: true,
          autoplaySpeed: 8000,
          arrows: false
          }
        }
      ]
    });

    // On before slide change
    $('#slider1').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('#number').text(currentSlide + 1);
    });

    $('#slider2').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: true,
      responsive: [
        {
        breakpoint: 767,
        settings: {
          autoplay: true,
          autoplaySpeed: 8000,
          arrows: false
          }
        }
      ]
    });

    // On before slide change
    $('#slider2').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('#number2').text(currentSlide + 1);
    });
  }

  $(document).ready(function(){
    if($('#slider1').size()) {
      ready();
    }
  });

})(window,jQuery);
jQuery(document).ready(function($){
  //set animation timing
  var animationDelay = 3000,
  //loading bar effect
  barAnimationDelay = 3800,
  barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //letters effect
  lettersDelay = 50,
  //type effect
  typeLettersDelay = 150,
  selectionDuration = 500,
  typeAnimationDelay = selectionDuration + 800,
  //clip effect 
  revealDuration = 600,
  revealAnimationDelay = 1500;
  
  initHeadline();

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters($words) {
    $words.each(function(){
      var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
      for (i in letters) {
        if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
      var headline = $(this);
      
      if(headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
      } else if (headline.hasClass('clip')){
        var spanWrapper = headline.find('.cd-words-wrapper'),
        newWidth = spanWrapper.width()
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type') ) {
        //assign to .cd-words-wrapper the width of its longest word
        var words = headline.find('.cd-words-wrapper b'),
          width = 0;
        words.each(function(){
          var wordWidth = $(this).width();
            if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
        if ($(window).width() < 768) {
          headline.find('.cd-words-wrapper').css('width', '205px');
        }else{
          headline.find('.cd-words-wrapper').css('width', '360px');
        }
      };

      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    
    if($word.parents('.cd-headline').hasClass('type')) {
      var parentSpan = $word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting'); 
      setTimeout(function(){ 
        parentSpan.removeClass('selected'); 
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
    
    } else if($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
        switchWord($word, nextWord);
        showWord(nextWord);
      });

    } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if($word.parents('.cd-headline').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() }, revealDuration, function(){ 
        setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
      });
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
    
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
    } else if($bool) { 
      setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }

    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    } 
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
    
    if(!$letter.is(':last-child')) { 
      setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
    } else { 
      if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
      if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
    var spanWrapper = $('.cd-words-wrapper'),
    newWidth = $newWord.width();
    spanWrapper.css('width', newWidth);
  }
});
//# sourceMappingURL=all.js.map