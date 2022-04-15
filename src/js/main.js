//here will by JavaScript code ...
console.log("in script");
$(function(){
    $('.top__slider').slick({
        arrows:false,
        dots:true,
        // autoplay:true,
        // autoplaySpeed:1000,
        fade:true,
        responsive: [
            {
              breakpoint: 601,
              settings: {

                dots: false,
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.menu__btn').click(function (){
        $('.header__menu-list').slideToggle();
    });

    // $(".top__to-go").on("click", "a", function (event){
    //     event.preventDefault();
    //     let id  = $(this).attr('href');

    //     top = $(id).offset().top;

    //     $('body, html').animate({scrollTop: top}, 900);
    // });
});