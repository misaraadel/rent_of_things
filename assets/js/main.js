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

    $('.nav-link-toggle').click(function(){
        $('.pop-up-products').toggleClass('active-popup');
    });

    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();

    $("#slider-range").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
            return false;
            }     
            $("#min_price").val(ui.values[0]);
            $("#max_price").val(ui.values[1]);

        }
    });

    $("#single-slider-range").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }     
            $("#single_min_price").val(ui.values[0]);
            $("#single_max_price").val(ui.values[1]);

        }
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
        loop:true,
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

// sing in password
var SignPass = false;
function signIn(){
    if(SignPass){
        document.getElementById("SignPassId").setAttribute("type" , "password");
        SignPass = false;
    }else{
        document.getElementById("SignPassId").setAttribute("type" , "text");
        SignPass = true;
    }
}

// sing in password
var AgainPass = false;
function passAgain(){
    if(AgainPass){
        document.getElementById("passAgainId").setAttribute("type" , "password");
        AgainPass = false;
    }else{
        document.getElementById("passAgainId").setAttribute("type" , "text");
        AgainPass = true;
    }
}

var oldPass = false;
function oldPassFun(){
    if(oldPass){
        document.getElementById("oldPassId").setAttribute("type" , "password");
        oldPass = false;
    }else{
        document.getElementById("oldPassId").setAttribute("type" , "text");
        oldPass = true;
    }
}

const sliderValue = document.querySelector(".number");
const inputSlider = document.querySelector(".rang-data");
const progressBar = document.querySelector(".progress-bar");
    
inputSlider.oninput = (() => {
    let value =  inputSlider.value;
    sliderValue.textContent = value;
    progressBar.style.width = value / 2 + "%" ;
});