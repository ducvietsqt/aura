
$(document).ready(function () {
    $(document).ready(function() {
        $(window).on('load', function () {
            // alert(1);
            $('body').addClass('loaded');
            $("#carouselExampleIndicators4").on('slide.bs.carousel', function (data) {
                // do something...
                // console.log(data.to)
                $("#carouselExampleIndicators3").carousel(data.to);
            })
            $("#carouselExampleIndicators5").on('slide.bs.carousel', function (data) {
                // do something...
                // console.log(data.to)
                $("#carouselExampleIndicators6").carousel(data.to);
            })
            $('.link_tab_direct').on('click', function () {
                var tab = $(this).data('href')
                $('.nav-tabs a[href="#'+tab+'"]').tab('show')
                // $('.link_tab_direct').siblings().removeClass('active');
                // $(this).addClass('active');
            })
        })
    })
});



var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

