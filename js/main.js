///
$(function()  {
    'use strict';
    //Adjust slider height
    var winH = $(window).height;
    var upperH = $('.upper-bar').innerHeight();
    var navH = $('.navbar').innerHeight();
    $('.slide, .carousel-item').height( winH - (upperH + navH));

});
 $('.featured-work ul li').on('click', () => {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if ($(this).data('class') === 'all'){
            $('.photos .col-md').css('opacity','1') ;
        } else {
            $('.photos .col-md').css('opacity',0.8);
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
