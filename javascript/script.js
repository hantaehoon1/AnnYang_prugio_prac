jQuery(document).ready(function () {
  $('.menu>ul').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(100);
    $('#bgwrap').stop().animate({ height: '400px' })
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
        el: ".pagination-swiper .span"
      },

      autoplay: {
        delay:5000,
        disableOnInteraction:false,
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

      if (swiper.activeIndex == 1 || swiper.activeIndex == 5) {

        // slider-box-1에 first-slide-actived 클래스 추가
        $(".slider-box-1").addClass("first-slide-actived");
      }


      // slider-box-1에 index-num 속성을 추가해서, 값을 인덱스 번호로 넣어준다.
      $(".slider-box-1").attr("index-num", swiper.activeIndex);

    });

  }
});

function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper", {
    // Optional parameters
    loop: true,
    // 한 화면에 보일 슬라이드 개수
    slidesPerView: 3.2,
    // 슬라이드 간의 간격
    spaceBetween: 20,
    // Navigation arrows

    autoplay: {
    delay:5000,
    disableOnInteraction:false,
    },

    navigation: {
      nextEl: ".premium7-button .next",
      prevEl: ".premium7-button .prev"
    }
  });
}

SliderBox2__init();

$(window).scroll(function(){
  let scroll = $(this).scrollTop();
  console.log(scroll);
  if(scroll > 2000) { // 스크롤 위치가 2000이상일 때
    $('.sub-bg').removeClass('active');
    $('.sub-bg img').removeClass('active');
    $('.sub-bg').addClass('active');
    $('.sub-bg img').addClass('active');
  }
});