$('.dropdownsandwich').click(function(e) {
e.preventDefault();
$(this).toggleClass('active');
});
var $slides = $('.slickslider1').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider1');
  });
}
$('.slickslider1').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
appendDots: $('.slickslider1dots'),
  dotsClass: 'slider1dots',
responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var $slides = $('.slickslider2').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider2');
  });
}
$('.slickslider2').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
appendDots: $('.slickslider2dots'),
  dotsClass: 'slider1dots',
responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var $slides = $('.slickslider3').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider3');
  });
}
$('.slickslider3').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 2,
appendDots: $('.slickslider3dots'),
  dotsClass: 'slider1dots',
responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var $slides = $('.slickslider4').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider4');
  });
}
$('.slickslider4').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 2,
appendDots: $('.slickslider4dots'),
  dotsClass: 'slider1dots',
responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var $slides = $('.slickslider5').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider5');
  });
}
$('.slickslider5').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 3,
appendDots: $('.slickslider5dots'),
  dotsClass: 'slider1dots',
  variableWidth: true,
responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var $slides = $('.slickslider6').find('.slide');
for (var i = 0; i < 4; i++) {
  $slides.each(function() {
    $(this).clone().appendTo('.slickslider6');
  });
}
$('.slickslider6').slick({
dots: true,
arrows: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 2,
appendDots: $('.slickslider6dots'),
  dotsClass: 'slider1dots',
  responsive: [
    {
      // show 1 slide at a time on mobile devices
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});