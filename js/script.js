//shrinking navbar. logo and Navlinks while scrolling up
$(document).ready(function () {
    var previousScroll = 0;
    var $navbar = $('.navbar');
    var $logo = $('.logo');
    var $navbarNav = $('.navbar-nav');

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            // Scrolling down
            $navbar.css('height', '60px');
            $navbar.css('padding', '10px 0');
            $logo.css('max-height', '40px');
            $navbarNav.addClass('shrink');
        } else {
            // Scrolling up
            $navbar.css('height', '110px');
            $navbar.css('padding', '20px 0');
            $logo.css('max-height', '100px');
            $navbarNav.removeClass('shrink');
        }

        previousScroll = currentScroll;
    });
});























