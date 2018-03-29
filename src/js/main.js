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
    // AUTOPLAY VIDEO SLIDER 
    $("#autoplay").on("click", function () {
        if (this.checked) {
            console.log('works');
            $('.video__slider').slick('slickPlay', true);
        } 
    });    
   // BOTTOM SLIDER WITH VIDEO
    $('.video__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,    
        autoplaySpeed: 1000,
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
        nextArrow: $('.video-next')
        
    });

    // VIDEO DURATION LABELS
    videoList = document.querySelectorAll('.video__clip');
    var videoArray = Array.from(videoList);
    videoArray.forEach(function (item, i, videoArray) {
        item.addEventListener('loadedmetadata', function () {

            var durationList = document.querySelectorAll('.video-duration');
            var durationArray = Array.from(durationList);
            label = durationArray[i];

            var roundDuration = Math.floor(item.duration);
            label.text = roundDuration;
            if (roundDuration % 60 < 10) {
                addCount = '0'
            } else addCount = '';
            $(label).text(Math.floor(roundDuration / 60) + ':' + addCount + roundDuration % 60);

        });
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

}); 
