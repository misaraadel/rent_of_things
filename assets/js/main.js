$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('acitve');
        } else {
            $(".scroll-top-btn").removeClass('acitve');
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.bottom-nav').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });

    $('.owl-banner').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: false,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
		navContainerClass: "container purpble-color owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        items:1
    });

    $('.owl-products').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container golden-color owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
});