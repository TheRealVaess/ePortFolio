$(document).ready(function () {
    $(window).scroll(function(){
        if($('.menu_background_scroll').offset().top <= $(window).scrollTop()) {
            $('.menu_big_screen').css({'background': 'rgba(51, 51, 51, 1)'});
        } else {
            $('.menu_big_screen').css({'background': 'rgba(51, 51, 51, 0)'});
        }
    });
});