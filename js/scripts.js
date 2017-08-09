jQuery(document).ready(function ($) {

    // topBar

    $('#topBar-prompt-close').on('click', function() {
        $('#topBar-prompt').remove();
    });

    // menu

    // $("ul.menu").superfish({
    //     hoverClass: "sfHover",
    //     delay: 800,
    //     animation: {opacity: "show"},
    //     animationOut: {opacity: "hide"},
    //     speed: "normal",
    //     speedOut: "fast",
    //     cssArrows: true
    // });

    // slider

    $(".sliderBox > div").responsiveSlides({
        namespace: "slider",
        auto: true,
        speed: 800,
        timeout: 5000,
        // pager: true,
        nav: true,
        random: false,
        pause: true,
        pauseControls: true,
        prevText: "&#xe8eb;",
        nextText: "&#xe8ec;",
        maxwidth: ""
    });
    // $(".slider a").attr("href","javascript:;");
    $(".slider_nav.prev").addClass("fontIcon icon-angle-left");
    $(".slider_nav.next").addClass("fontIcon icon-angle-right");
    // var sliderImageLoad = [];
    // $(".sliderBox img").each(function () {
    //     var sliderImage = $.Deferred();
    //     $(this).load(sliderImage.resolve);
    //     sliderImageLoad.push(sliderImage);
    // });
    // $.when.apply(null, sliderImageLoad).done(function () {
    //     $(".fontIconLoading").remove();
    // });

    // fancy box

    // $(".fancybox").fancybox({
    //     helpers: {
    //         padding: 10,
    //         margin: 15,
    //         title : {
    //             type : 'outside'
    //         }
    //     }
    // });

    // parallax

    $(".parallaxText").each(function () {
        var parallaxTextOffset = $(".parallaxText").height();
        $(this).css("margin-top", -parallaxTextOffset / 2);
    });

});
