$(function(){
    "use strict";

    $(window).on("ready, scroll", function(){
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    $('.sidebar').affix({
        offset: {
            top: 100,
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });

    var b = $(".sidebar nav");
    b.affix({
        offset: {
            top: function() {
                var c = b.offset().top,
                    d = parseInt(b.children(0).css("margin-top"), 10),
                    e = $("header").height();
                return this.top = c - e - d
            },
            bottom: function() {
                return this.bottom = $("footer").outerHeight(!0)
            }
        }
    });

    $("body").scrollspy({
            target: ".sidebar"
    });
    /*
    $('.nav').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });
    */

    $.scrollUp({
        animation: 'slide',
        scrollText: '<span class="glyphicon glyphicon-chevron-up"></span>',
        /*activeOverlay: '#00FFFF'*/
        activeOverlay: false
	});


});
