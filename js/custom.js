//=======NavButton

 $(document).ready(function(){
    $('.navbar-toggle').mouseover(function(){
      $('.icon-bar').addClass('green');
    });
     $('.navbar-toggle').focusout(function(){
      $('.icon-bar').removeClass('green');
    });
  });

//==============mainDiv
$(document).ready(function(){
    $('.goGreen').slideDown(3000);
    });


/*jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});*/

