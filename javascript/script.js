jQuery(document).ready(function(){
  $('.menu>ul').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(100);
    $('header::before').stop().animate({height:'300px'})
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(100);
    $('header::before').stop().animate({height:'0px'})
  });
});