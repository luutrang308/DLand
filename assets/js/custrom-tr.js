$('.slider-homepage').slick({
  dots: true,
  slidesToShow: 1,
});
$('.slider-project').slick({
  dots: true,
  slidesToShow: 3,
  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/11.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/10.png' alt=''></button>",
  responsive:[
  {
    breakpoint: 765,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  ]
});
$('.search-menu a img').click(function(){
  $('.search-menu form').fadeToggle('slow');/*
  $('.search-menu ').addClass(' search-menu-active');*/
});
$('.slider-video .item').click(function(){
  $(this).find(".thumnail").css("display","none");
});
$('.slider-video').slick({
  dots: true,
  slidesToShow: 1,
  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/11.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./assets/img/10.png' alt=''></button>",
});
$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    ]
  });
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.your-class').slick('setPosition');
});
/* back to top */
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
    $('.backtotop').fadeIn();
  } else {
    $('.backtotop').fadeOut();
  }
});
$('.backtotop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
/* back to top */
$('.slider-tab-us-mobi').slick({
  dots: false,
  slidesToShow: 1,
});
