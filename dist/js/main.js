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

    

        // VIDEO LABELS
   
    // for (i = 0; i < document.getElementsByClassName('video__clip').length; i++) {
    //     var video = document.getElementsByClassName('video__clip')[i];
    //     video.addEventListener('loadedmetadata', function () {
    //         var duration = $(video).duration;
    //         console.log(video.duration);
    //     });     
    //     console.log(video);
        
    //     console.log(duration);
    //     var t = setInterval(function () {
            
    //         if (video.readyState > 0) {
    //             var duration = $(video).duration;
    //             console.log(duration);
    //             var roundDuration = Math.floor(duration);
    //             let addCount = '';
    //             if (roundDuration % 60 > 10) {
    //                 addCount = '0'
    //             }
    //             else addCount = ''
    //             $('#videoDurClip' + i).text(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);
    //             clearInterval(t);
    //         }
            
    //     }, 2000);

    // }
    
    var vid = document.getElementById("video__clip0");
    vid.onloadedmetadata = function () {
        duration = vid.duration;
        console.log(duration);  
    };
}); 


