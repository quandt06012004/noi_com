$(function () {
    $(window).scroll(function () {
        var vitribody = $('html, body').scrollTop();
        // var vitrigiaodien = $('.menu-bar').offset().top;

        if (vitribody >= 100) {
            // doan nay addclass
            // $('.menu-bar').addClass('animate__fadeInDown');
            $('.menu').addClass('pin-menu');
            $('.header').addClass('pin-header');
        } else {
            $('.menu').removeClass('pin-menu');
            $('.header').removeClass('pin-header');
            console.log('hello')

        }
    });
});