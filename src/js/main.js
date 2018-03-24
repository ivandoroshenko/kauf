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
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false

            }
        }
    ]
});

$(function() {
   
    //navigation click======
    // $('.nav__item a').click(function (e) {
    //     e.preventDefault();
    //     console.log($(this).attr('href'));
    //     var getHref = $(this).attr('href');
    //     var jump = $(getHref).offset().top;
    //     $('html, body').animate({
    //         scrollTop: jump
    //     }, 1000);
    // });

    // BIG SLIDER
    

    

    // BOTTOM SLIDER WITH VIDEO
    $('.video__slider').slick({

        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: false,
        autoplay: false,    
        autoplaySpeed: 2000,
        speed: 700,
        fade: false,
        cssEase: 'ease-in-out',
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2

              }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 677,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 461,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ],
        prevArrow: $('.video-prev'),
        nextArrow: $('.video-next'),

       
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
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },

            {
                breakpoint: 529,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }

        ],
        prevArrow: $('.storage-prev'),
        nextArrow: $('.storage-next')
    });

    $('#autoplay').prop("checked", function () {
        $('video__slider').slick({
            autoplay: true
        })
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

    // VIDEO PLAY PAUSE
    $('video').click(function (event) {
        this.paused ? this.play(): this.pause();
             
    });

    // ADDING COMTROLS TO VIDEO
 $(document).click(function (event) {
        vid = event.target;
       
        if ($(vid).attr("controls", false) && ($(vid).hasClass("video__clip")) || ($(vid).hasClass("top__video")) ) {
         $(vid).prop("controls", true);

           
            
        } 
    });

    

        
    for (i = 0; i < document.getElementsByClassName('video__clip').length; i++) {
        var video = document.getElementsByClassName('video__clip')[i];
        console.log(video);
        var duration = $(video).duration;
        console.log(duration);
        var t = setInterval(function () {
            
            if (video.readyState > 0) {
                var duration = $(video).duration;
                console.log(duration);
                var roundDuration = Math.floor(duration);
                let addCount = '';
                if (roundDuration % 60 > 10) {
                    addCount = '0'
                }
                else addCount = ''
                $('#videoDurClip' + i).text(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
                clearInterval(t);
            }
            
        }, 200);

    }
    

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


