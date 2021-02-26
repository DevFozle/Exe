$(function () {
  // counterup
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  //feedback slider
  $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    vertical: true,
    dots: true,
    arrows: false,
    verticalSwiping: true,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  //blog slider
  $('.blog-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      }
    ]
  });
  //Wow js
  new WOW().init();

  //Brands logo slider
  $('.brands-slider-main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
    ]
  });

  //News Latter slider
  $('.news-slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    dots: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  //Venobox Initialization
  $('.venobox').venobox({

    framewidth: '800px',
  });


  //Venobox Initialization
  $('.feedback-person').venobox({

    spinColor: '#E5493A',
    framewidth: '400px',
    border: '4px',
    bgcolor: '#E5493A',
    share: ['facebook', 'twitter', 'download']

  });

  //back To Top button
  $('.bttop .arrow').click(function () {

    $('html,body').animate({ scrollTop: 0 }, 1000);
  });

  // back to Top button & Nav bar scroll animation
  $(window).scroll(function () {

    var scrollammount = $(this).scrollTop();
    if (scrollammount > 200) {
      $('.bttop').addClass('bttop2');
      $('.navbar').addClass('navbar-collaps');
    }
    else {
      $('.bttop').removeClass('bttop2');
      $('.navbar').removeClass('navbar-collaps');
    }
  });

  //smooth scroll
  var scrollLink = $('.nav-link');
  $(scrollLink).click(function (event) {

    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 75 });
  });
  $(scrollLink).click(function () {

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });

});

//faq toggle stuff 
$('.togglefaq').click(function (e) {
  e.preventDefault();
  var notthis = $('.actived').not(this);
  notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
  notthis.toggleClass('actived').next('.faqanswer').slideToggle(300);
  $(this).toggleClass('actived').next().slideToggle("fast");
  $(this).children('i').toggleClass('icon-plus icon-minus');
});


// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}