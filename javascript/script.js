jQuery(document).ready(function(){
  $('.menu>ul').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(100);
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(100);
  });
});