jQuery(document).ready(function(){
  $('.menu>ul').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(100);
    $('#bgwrap').stop().animate({height:'300px'})
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(100);
    $('#bgwrap').stop().animate({height:'100px'})
  });

  SliderBox1__init();
  
  function SliderBox1__init() {
    const swiper = new Swiper(".slider-box-1 .swiper", {
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: ".slider-box-1 .swiper-pagination"
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".slider-box-1 .swiper-button-next",
        prevEl: ".slider-box-1 .swiper-button-prev"
      },
    });
  }
  
  swiper.on('slideChange', function(){
    console.log(siwper.activeIndex);

    $('.slider-box-1').removeClass('first-slide-actived');


  });


});