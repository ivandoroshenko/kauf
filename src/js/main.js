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
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        prevArrow: $('.video-prev'),
        nextArrow: $('.video-next'),

       
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

        // VIDEO DURATION ====
        // var video = $('#video__clip0')[0];
        // var t = setInterval(function () {
        //     if (video.readyState > 0) {
        //         var duration = video.duration;
        //         var roundDuration = Math.floor(duration);
        //         let addCount = '';
        //         if (roundDuration % 60 > 10) {
        //             addCount = '0'
        //         }
        //         else addCount = '0'
        //         console.log(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
        //         $('#videoDurClip0').text(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
        //         clearInterval(t);
        //     }
        // }, 500);
    


    for (i = 0; i < document.getElementsByClassName('video__clip').length; i++) {
        var video = document.getElementsByClassName('video__clip')[i];
        console.log(video); 
        var t = setInterval(function () {
            
            if (video.readyState > 0) {
                var duration = video.duration;
                console.log(duration);
                var roundDuration = Math.floor(duration);
                let addCount = '';
                if (roundDuration % 60 < 10) {
                    addCount = '0'
                }
                else addCount = ''
                // console.log(addCount);
                // console.log(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
                $('#videoDurClip' + i).text(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
                clearInterval(t);
                console.log('#videoDurClip' + i);
            }
        }, 500);

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


