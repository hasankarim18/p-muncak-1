

//$('.counter').counterUp();



//initiating jQuery
jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
});


//simple counter js code

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});



//aos initiating code

AOS.init();


// swiper code goes here


var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// neon light effect with jquery effect

/*


$(".contact-form-row").hover(function () {
    $("#neon").css("color", "@keyframes neonAnim {
from {
        text- shadow:
        0 0 10px rgba(255, 255, 255, .7),
        0 0 40px rgba(255, 255, 255, .7),
        0 0 100px rgba(255, 255, 255, .7);
}
to {
    text- shadow:
    0 0 5px rgba(255, 255, 255, .7),
    0 0 20px rgba(255, 255, 255, .7),
    0 0 60px rgba(255, 255, 255, .7);
}");
}, function () {
        $("#neon").css("color", "pink");
});


*/