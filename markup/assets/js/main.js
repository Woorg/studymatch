import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import magnificPopup from 'magnific-popup';
// import slick from 'slick-carousel';
import LazyLoad from 'vanilla-lazyload';

import "webp-hero/dist-cjs/polyfills";
import WebpMachine from "webp-hero/dist/webp-machine"
// import 'jquery-mask-plugin';
// import 'ion-rangeslider';
// import Dropzone from 'dropzone';

// import "jquery-mask-plugin";
// import bound from 'bounds.js';

(function ($) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #82B93C',
        'color: #fff',
        'display: inline-block',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
        'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
        'line-height: 1.56',
        'text-align: left',
        'font-size: 16px',
        'font-weight: 400'
    ].join(';');

    console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);


     /* 
        Lazyload images
      */


    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        load_delay: 50
        // ... more custom settings?
    });


    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    // var webpMachine = new webpHero.WebpMachine();
    // webpMachine.polyfillDocument();



    $(function() {

        /*
            Nav
        */

        const $navTrigger =  $('.nav__trigger');

        $navTrigger.on('click', function () {
            $(this).toggleClass('nav__trigger_active');;            

        });

        /*
            To section
        */

        $('.hero__button, .nav__link').on( 'click', function(e) {
            e.preventDefault();
            let _scroll = $(this).attr('href');
            if (_scroll != '#' && $(_scroll).length) {
                $('html, body').animate({ scrollTop: $(_scroll).offset().top - 150  }, 300);
            }
        });

        $('.nav__item').on('click', function(e) {
            e.preventDefault();
            $(this).siblings().removeClass('nav__item_active');
            $(this).addClass('nav__item_active');

            $('.nav__trigger').removeClass('nav__trigger_active');
        });


        // $(document).on('click', function(e) {
        //     if (!$(e.target).closest('.nav__trigger_active').length) {
        //         $navTrigger.removeClass('nav__trigger_active');
        //     }
        // });

        // let $wW = $(window).width();
        // let doing = $('.doing').scrollTop();

        // $(window).resize(function() {
        //     let $hHeader = $('.header').outerHeight();

        // });


        if ( $(window).width() <= 991 ) {

            // let $header = $('.header').offset().top;
            // let $doing = $('.doing').offset().top - $headerHeight;

            // console.log($doing - $headerHeight);


            $(window).on('scroll', function () {

                console.log($(window).scrollTop());

                if( $(window).scrollTop() > 0 ) {

                    $('.header__address').hide(50);

                } else {

                    $('.header__address').show(50);
                }

            });

            $(window).on('resize', function () {

                console.log($(window).scrollTop());

                if( $(window).scrollTop() > 0 ) {

                    $('.header__address').hide(50);

                } else {

                    $('.header__address').show(50);
                }

            });


        } else {


        }

        // $(window).on('scroll', function () {
        //     console.log($(window).scrollTop());
        //     let $doing = $('.header').scrollTop();

        //     if( $(window).scrollTop() >= $doing ) {
        //         $('.header__address').hide();
        //     } else {
        //         $('.header__address').show();
        //     }

        // });


        // let $doing = $('.header').scrollTop();

        // if( $(window).scrollTop() >= $doing ) {
        //     $('.header__address').hide();
        // } else {
        //     $('.header__address').show();
        // }



        /*
            Slider
        */


        const $reviewsCarousel = $('.reviews__carousel');

        if( $reviewsCarousel.length > 0 ) {
            $reviewsCarousel.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                loop: true,
                infinite: true,
                slidesToShow: 1,
                speed: 600,
                adaptiveHeight: true,
                centerMode: true,
                centerPadding: '0',
                variableWidth: false,
                waitForAnimate: true,
                focusOnSelect: true,
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        variableWidth: true,
                        centerMode: true,
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        variableWidth: true,
                        centerMode: true,
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 5,
                    }
                }]
            });
        }


        /* 
            Form
        */

        // $('.open-popup').magnificPopup({
        //     type:'inline',
        //     midClick: true 
        // });


        var form = $('.cta__form'),
            popup = $('.popup'),
            form_data;

        // Success function
        function done_func(response) {
            // popup.fadeIn().removeClass('popup__success_fail').addClass('popup__success_active');
            
            openPopup();

            function openPopup() {

                $.magnificPopup.open({
                    items: {
                        src: '#success'
                    },
                    type: 'inline'
                });

            }


            // popup.text(response);

            // setTimeout(function () {
            //     popup.fadeOut();
            // }, 2000);

            // form.find('input:not([type="submit"]), textarea').val('');
        }

        // Fail function
        function fail_func(data) {
            // popup.text(data.responseText);

            // setTimeout(function () {
            //     popup.fadeOut();
            // }, 2000);

            openPopup();

            function openPopup() {
                $.magnificPopup.open({
                    items: {
                        src: '#fail'
                    },
                    type: 'inline'
                });
            }


        }

        form.submit(function (e) {


            e.preventDefault();
            form_data = $(this).serialize();

            console.log(form_data);
            
            $.ajax({
                type: 'POST',
                url:  form.attr('action'),
                data: form_data
            })
            .done(done_func)
            .fail(fail_func);
        });


    });

})(jQuery);
