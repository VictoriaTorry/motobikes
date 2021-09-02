//Init JQuery=============================================================================
$(document).ready(function(){

//Slider==================================================================================
if($('.slider__body').length>0){
    $('.slider__body').slick({
        //autoplay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight:true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    })
}
//========================================================================================
});

//Burger==================================================================================
$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});
//========================================================================================



// background img ========================================================================
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }   
    ibg();



//========================================================================================
/*Fixed header*/
$(function(){
    let header = $('#header');
    let mainScreen = $('#main__screen');
    let mainScreenH = mainScreen.innerHeight();
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        mainScreenH = mainScreen.innerHeight();
        scrollPosition = $(this).scrollTop();

        if(scrollPosition > mainScreenH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        /*delete active classes from the burger*/
        $('.icon-menu').removeClass('active');
        $('.menu__body').removeClass('active');
        $('body').removeClass('lock');


        $("html, body").animate({
            scrollTop: elementOffset - 40
        },1000);
    });



});