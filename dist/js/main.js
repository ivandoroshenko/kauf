$('.intro__slider').slick({dots:true,arrows:true,infinite:false,autoplay:false,autoplaySpeed:2000,speed:500,fade:false,cssEase:'ease-in-out',adaptiveHeight:false,prevArrow:$('.prev'),nextArrow:$('.next'),responsive:[{breakpoint:769,settings:{arrows:false}}]});$(function(){$('.video__slider').slick({dots:false,arrows:true,slidesToShow:5,slidesToScroll:2,infinite:false,autoplay:false,autoplaySpeed:2000,speed:700,fade:false,cssEase:'ease-in-out',adaptiveHeight:false,responsive:[{breakpoint:1025,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:677,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:461,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:$('.video-prev'),nextArrow:$('.video-next'),});$('.storage__slider').slick({dots:false,arrows:true,slidesToShow:3,slidesToScroll:3,infinite:true,autoplay:false,autoplaySpeed:2000,speed:600,fade:false,cssEase:'ease-out',adaptiveHeight:false,responsive:[{breakpoint:769,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:529,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:$('.storage-prev'),nextArrow:$('.storage-next')});$('#autoplay').prop("checked",function(){$('video__slider').slick({autoplay:true})});$('video').click(function(event){this.paused?this.play():this.pause();});$(document).click(function(event){vid=event.target;if($(vid).attr("controls",false)&&($(vid).hasClass("video__clip"))||($(vid).hasClass("top__video"))){$(vid).prop("controls",true);}});var vid=document.getElementById("video__clip0");vid.onloadedmetadata=function(){duration=vid.duration;console.log(duration);};});