// fixed Header
$(function () {
    var kmg_fix = 45; // В каком положении полосы прокрутки прятать верхнюю панель
    var speed = 350; // Скорость прокрутки
    var tempScrollTop,
        currentScrollTop = 0;
    $(window).scroll(function () {
        currentScrollTop = jQuery(window).scrollTop();
        if (tempScrollTop < currentScrollTop) {
            if ($(this).scrollTop() > kmg_fix) {
                $("header").addClass("is-sticky");
            // .main-header.is-sticky .kepler.main-nav
                // $(".header__schedule-inner").removeClass("active");
            } else {
                $("header").removeClass("is-sticky");
            }
        } else if (tempScrollTop > currentScrollTop) {
            $("header").removeClass("is-sticky");
        } else if (tempScrollTop > currentScrollTop) {
            $("header").removeClass("is-sticky");
        }
        tempScrollTop = currentScrollTop;
    });
    $('.mobile-nav-toggle').on('click',function (){
        $(this).toggleClass('open')
        $('nav').toggleClass('mobile-open')
    })
});