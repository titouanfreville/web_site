$().ready(function(){

  $(window).scroll(function () {
    if (document.body.offsetHeight - 400 > window.screen.height) {
      if ($(this).scrollTop() > 400) {
        $('.header').addClass("fixed");
        $('.main').addClass("top");
      } else {
        $('.header').removeClass("fixed");
        $('.main').removeClass("top");
      }
    }
  });
});
