var previousScroll = 0;

        $(document).ready(function () {
            $(window).scroll(function () {
                var currentScroll = $(this).scrollTop();

                if (currentScroll > previousScroll) {
                    // Scrolling down
                    $('.navbar').css('height', '80px');
                    $('.navbar').css('padding', '10px 0');
                    $('.navbar-nav').css('padding', '5px 0');
                    $('.logo').css('padding', '400px 0');
                } else {
                    // Scrolling up
                    $('.navbar').css('height', '150px');
                    $('.navbar').css('padding', '0px 0');
                    $('.navbar-').css('padding', '0px 0');
                    $('.logo').css('padding', '100px 0');
                }

                previousScroll = currentScroll;
            });
        });
    













/*$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').css('height', '60px');
            $('.navbar').css('padding', '10px 0');
            $('.nav-link').css('padding', '5px 0');
            $('.logo').css('padding', '10px 0');
        } else {
            $('.navbar').css('height', '80px');
            $('.navbar').css('padding', '20px 0');
            $('.nav-link').css('padding', '100px 0');
            $('.logo').css('padding', '100px 0');

            
        }  
    }); 
});
*/