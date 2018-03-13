$(function() {

    //navigation click======
    $('.nav__item a').click(function (e) {
        e.preventDefault();
        console.log($(this).attr('href'));
        var getHref = $(this).attr('href');
        var jump = $(getHref).offset().top;
        $('html, body').animate({
            scrollTop: jump
        }, 1000);
    });

    // BIG SLIDER
    $('.intro__slider').slick({
       
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        fade: false,
        cssEase: 'ease-in-out',
        adaptiveHeight: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    //MIDDLE SLIDER WITH THE GOODS 
    $('.storage__slider').slick({

        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 600,
        fade: false,
        cssEase: 'ease-out',
        adaptiveHeight: false,
        prevArrow: $('.storage-prev'),
        nextArrow: $('.storage-next')
    });

    // BOTTOM SLIDER WITH VIDEO
    $('.video__slider').slick({

        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 700,
        fade: false,
        cssEase: 'ease-in-out',
        adaptiveHeight: false,
        prevArrow: $('.video-prev'),
        nextArrow: $('.video-next')
    });
   


    // $('.parallax-window').parallax({ 
    //     imageSrc: '../img/paralax_bg.jpg' 
    // });

    //dropdown header
    $(document).scroll(function () {
        console.log($(document).scrollTop());
        if (($(document).scrollTop() > 130)) {
            
            
           
        } else
        $('.header').removeClass('header-fixed');
       
     
    }); 

    $('video').click(function (event) {
        this.paused ? this.play(): this.pause();
        
        
    });

    $('video').click(function (event) {
        var getHref = $(this).attr('id');
        $(getHref).controls = 'true';
        console.log(getHref);
    });




    

    // $(document).bind("click keydown", function (event) {
    //     closeModal = event.target;
    //     escapeClose = event.which;
    //     if ($(closeModal).hasClass("modal__close") || $(closeModal).hasClass("overlay") || escapeClose == 27) {
    //         $('.modal, .overlay').hide();
    //         $('body').removeClass("fixed_overlay");
    //     }

    // });

    //button up
    $(document).click(function (event) {
        btnUp = event.target;
        console.log(event.target);
        if ($(btnUp.parentNode).hasClass('btn-up') ) {
            $('body, html').animate({ 'scrollTop': 0 }, 1000);
        }
    });
    $(document).scroll(function (e) { 
        e.preventDefault;
        if ($(document).scrollTop() > 200) {
            $('.btn-up').addClass('btn-up--shown');
        } else {
            $('.btn-up').removeClass('btn-up--shown')
       }
    }); 
    
    
}); 


