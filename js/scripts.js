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
    $(".sliderBox-product > div").responsiveSlides({
        namespace: "slider",
        auto: false,
        speed: 800,
        timeout: 5000,
        pager: true,
        nav: true,
        random: false,
        pause: true,
        pager: true,
        pauseControls: true,
        manualControls: '.sliderBox-product-pager',
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

    // toast
    function toast(message, duration, position, align) {
        if (typeof(position) != "undefined" && position != "") {
            position = "toast-" + position;
        } else {
            position = "";
        }
        if (typeof(align) != "undefined" && align != "") {
            align = "align-" + align;
        } else {
            align = "";
        }
        duration = duration || 3000;
        duration = isNaN(duration) ? 3000 : duration;
        var m = document.createElement('div');
        m.setAttribute("class", "toast " + position + " " + align);
        m.innerHTML = message;
        document.body.appendChild(m);
        setTimeout(function() {
            m.setAttribute("class", "toast show " + position + " " + align);
            setTimeout(function() {
                m.setAttribute("class", "toast  " + position + " " + align);
                setTimeout(function() {
                    document.body.removeChild(m);
                }, 300);
            }, duration);
        }, 100);
    }

    $('.toast-temp').on('click', function() {
        toast('正在建设中...', 3000, 'top', 'center');
        return false;
    });

    $(".zoomImage").elevateZoom({
        gallery: '.gallery',
        cursor: 'pointer',
        galleryActiveClass: 'current',
        constrainType: 'width',
        zoomWindowOffetx: 10,
        borderSize: 2,
        zoomWindowWidth: 416,
        zoomWindowHeight: 416,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 500,
        lensFadeOut: 500,
        borderColour: '#fff',
        loadingIcon: 'img/loading.gif'
    });

});
