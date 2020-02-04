$(document).ready(function(){
    var mobile_nav_icon = $('#js--navigation__menu--mobile-icon');
    var nav = $('.js--navigation__menu--main');
    var nav_container = $('.js--navigation__container');

    $('.js--scroll-to-home').click(function(){
        $('html,body').animate({scrollTop: $('.header').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-about').click(function(){
        $('html,body').animate({scrollTop: $('.section-about').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-ingredients').click(function(){
        $('html,body').animate({scrollTop: $('.section-ingredients').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-menu').click(function(){
        $('html,body').animate({scrollTop: $('.section-menu').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-menu2').click(function(){
        $('html,body').animate({scrollTop: $('.section-menu').offset().top},1000);
    });
    $('.js--scroll-to-reviews').click(function(){
        $('html,body').animate({scrollTop: $('.section-reviews').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-reservations').click(function(){
        $('html,body').animate({scrollTop: $('.section-reservations').offset().top},1000);
        exit_mobile_menu();
    });
    $('.js--scroll-to-reservations2').click(function(){
        $('html,body').animate({scrollTop: $('.section-reservations').offset().top},1000);

    });


    $('.js--navigation__menu--mobile').click(function(){

        var icon_class = mobile_nav_icon.attr("class");

        if(icon_class == "fas fa-bars"){
            mobile_nav_icon.attr("class","fas fa-times");
            nav_container.toggleClass("dark-transparant-mobile");
        }else{

            mobile_nav_icon.attr("class","fas fa-bars");  
            nav_container.toggleClass("dark-transparant-mobile");
        }
        nav.slideToggle(200);
         
    });

    function exit_mobile_menu(){
        if (window.matchMedia('(max-width: 767px)').matches)
            {
                mobile_nav_icon.attr("class","fas fa-bars");  
                nav_container.toggleClass("dark-transparant-mobile");
                nav.slideToggle(200);
            }
    }

});