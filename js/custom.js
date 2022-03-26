$('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<a class="banner_left_arrow"><i class="fas fa-angle-left"></i></a>',
    nextArrow: '<a class="banner_right_arrow"><i class="fas fa-angle-right"></i></a>',
    dots: true,
    autoplay: false,
    slidesToScroll: 1
  });
$('.test-slick').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    
    dots: false,
    autoplay: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


  });

  new VenoBox({
    spinner: 'flow',
    selector: ".gallery-pic",
    navSpeed: 30,
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

var containerEl = document.querySelector('.mix-it');

var mixer = mixitup(containerEl, {
  load: {
      filter: '.mon',
      
  }
});

$('.partner-slick').slick({
  infinite: true,
  slidesToShow: 5,
  arrows: true,
  prevArrow: '<a class="partner_left_arrow"><i class="fas fa-angle-left"></i></a>',
  nextArrow: '<a class="partner_right_arrow"><i class="fas fa-angle-right"></i></a>',
  dots: false,
  autoplay: false,
  slidesToScroll: 2,
});


