// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            // $('.active').removeClass('active');
            // $('.' + this.hash.slice(1)).addClass('active');
            $('html,body').animate({
                scrollTop: target.offset().top

            }, 1100);
            return false;
        }


    }
});

$(window).scroll(function () {
    var target = $(this.hash); 
    console.log(target);
    var scroll = $(window).scrollTop() + 30;
    var height = $(window).height();

    if (scroll <= height) {
        $('.active').removeClass('active');
        $('.section1').addClass('active');
    } else if (scroll >= height && scroll <= height * 2) {
        $('.active').removeClass('active');
        $('.section2').addClass('active')
    } else if (scroll >= height * 2 && scroll <= height * 3) {
        $('.active').removeClass('active');
        $('.section3').addClass('active')
    } else if (scroll >= height * 3 && scroll <= height * 4) {
        $('.active').removeClass('active');
        $('.section4').addClass('active')
    } else if (scroll >= height * 4 && scroll <= height * 5) {
        $('.active').removeClass('active');
        $('.section5').addClass('active')
    }
    else if (scroll >= height * 4 && scroll <= height * 6) {
        $('.active').removeClass('active');
        $('.section6').addClass('active')
    }

})
// }); //missing )
