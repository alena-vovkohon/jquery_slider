$(document).ready(function() {
    $('.box-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

    console.log($('.slick-prev').html(""));
    console.log($('.slick-next').html(""));
    console.log($('.slick-dots').removeAttr('style'));

   
     

});

