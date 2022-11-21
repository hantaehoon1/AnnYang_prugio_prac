jQuery(document).ready(function () {
  $('.menu>ul').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(100);
    $('#bgwrap').stop().animate({ height: '300px' })
  }).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(100);
    $('#bgwrap').stop().animate({ height: '70px' })
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

    swiper.on('slideChange', function () {
      console.log(swiper.activeIndex);

      $('.slider-box-1').removeClass('first-slide-actived');

      if (swiper.activeIndex == 1 || swiper.activeIndex == 6) {

        // slider-box-1에 first-slide-actived 클래스 추가
        $(".slider-box-1").addClass("first-slide-actived");
      }


      // slider-box-1에 index-num 속성을 추가해서, 값을 인덱스 번호로 넣어준다.
      $(".slider-box-1").attr("index-num", swiper.activeIndex);

    });

  }
});