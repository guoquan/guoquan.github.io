$(function(){
    "use strict";

    var b = $(".sidebar nav");
    var e = 10; // .sidebar nav.affix { top: 10px }
    b.affix({
        offset: {
            top: function() {
                var c = b.offset().top,
                    d = parseInt(b.css("margin-top"), 10),
                    e = 20; //$("header").height();
                return this.top = c - d - e
            },
            bottom: function() {
                return this.bottom = $("footer").outerHeight(!0)
            }
        }
    });

    $("body").scrollspy({
            target: ".sidebar"
    });

    $.scrollUp({
        animation: 'slide',
        scrollText: '<span class="glyphicon glyphicon-chevron-up"></span>',
        /*activeOverlay: '#00FFFF'*/
        activeOverlay: false
	});


});
