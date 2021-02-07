@@include('./libs.js');
@@include('./three.js');
;;;;;;;;;;;;;;;
@@include('./hover.js')
;;;;;;;;;;;;;;;;;;;
@@include('./gmap.js');
;;;;;;;;;;;;;
@@include('./popup.js');
@@include('./form.js');



// (function () {
//     var originalAddClassMethod = jQuery.fn.addClass;
//     var originalRemoveClassMethod = jQuery.fn.removeClass;
//     jQuery.fn.addClass = function () {
//         var result = originalAddClassMethod.apply(this, arguments);
//         jQuery(this).trigger('classChanged');
//         return result;
//     }
//     jQuery.fn.removeClass = function () {
//         var result = originalRemoveClassMethod.apply(this, arguments);
//         jQuery(this).trigger('classChanged');
//         return result;
//     }
// })();

$(document).ready(function () {
    /* HEADER MOBILE BURGER MENU*/
    $('body').css('opacity', '1');
    $('.header__burger').on('click', function () {
        $('.mobile-menu').addClass('mobile-menu_active');
    });
    $('.mobile-menu__close-btn').on('click', function () {
        $('.mobile-menu').removeClass('mobile-menu_active')
    });
    /* HEADER MOBILE BURGER MENU END*/
    /* MAIN SCREEN SLIDER */
    
    $('.main-slider__slide_1').addClass('active');

    /* Mobile Slider */

    /* Mobile Slider END*/
    //ADAPTIVE CORRECTION


    // $('.slider__slide').bind('classChanged', function(){
    //     if ($('.slider__slide').hasClass('active')){
    //         $('.active-slide-left-top').css('transform', `translate(${leftPosCorrection + 640}px, 0) rotate(25deg)`);
    //         $('.active-slide-left-bottom').css('transform', `translateX(${leftPosCorrection + 800}px) rotate(-45deg)`);
    //     } else{
    //         $('.active-slide-left-top').css('transform', `translate(0, 0) rotate(25deg)`);
    //         $('.active-slide-left-bottom').css('transform', `translateX(0) rotate(-45deg)`);
    //     }
    // })
    // leftPosCorrection = 0;
    // if($(window).width() > 1200){
    //     leftPosCorrection = (($(document).width() - 1200) / 2) + 20;
    // } else if ($(window).width() >= 767){
    //     leftPosCorrection = 85;
    // }
    // else {
    //     leftPosCorrection = 10;
    // }

    /* ADAPTIVE ITEMS TRANSFER */
    //initial items transfer
    const windowWidth = $(document).width();
    //why vars
    const $slideArr = $('.why__slide-wrapper');
    const $mobileSliderArr = $('.why__mobile-slider-slide');
    //footer vars
    const $footerRow = $($('.footer__row')[0]);
    const $footerCol6 = $('.footer__col_6');
    const $footerCol5 = $('.footer__col_5');
    const $footerCol4 = $('.footer__col_4');
    if (windowWidth <= 768) {
        $footerCol5.appendTo($footerCol4);
    }
    if (windowWidth <= 640) {
        for (let i = 0; i < $slideArr.length; i++) {
            $($slideArr[i]).appendTo($($mobileSliderArr[i]))
        }

        $('.gallery__control-dots').insertBefore('.gallery__slider');
        $('.gal-text-slider').insertAfter('.gallery__slider');
    }
    if (windowWidth <= 480) {
        $footerCol6.appendTo($footerCol5);
    }

    //dynamic items transfer
    $(window).resize(function (e) {
        let resizeWindowWidth = $(document).width();
        if (resizeWindowWidth <= 768) {
            if (!$footerCol5.hasClass('dynamicly-added')) {
                $footerCol5.appendTo($footerCol4);
                $footerCol5.addClass('dynamicly-added');
            }

        } else {
            if ($footerCol5.hasClass('dynamicly-added')) {
                $footerCol5.insertAfter('.footer__col_4');
                $footerCol5.removeClass('dynamicly-added')

            }

        }
        if (resizeWindowWidth <= 480) {
            if (!$footerCol6.hasClass('dynamicly-added')) {
                $footerCol6.appendTo($footerCol5);
                $footerCol6.addClass('dynamicly-added');
            }
        } else {
            if ($footerCol6.hasClass('dynamicly-added')) {
                $footerCol6.appendTo($footerRow);
                $footerCol6.removeClass('dynamicly-added')

            }
        }
    })

    /* ADAPTIVE ITEMS TRANSFER END */








    //SLIDER CONTROL
    $('.main-screen__slider-number').on('click', function () {
        $('.main-screen__slider-number').removeClass('main-screen__slider-number_active');
        $('.main-slider__slide').removeClass('active');
        $('.slider__slide').removeClass('active');
        $(this).addClass('main-screen__slider-number_active');
        let slideNumber = $('.main-screen__slider-number_active').data().slideid;
        $($('.slider__slide')[slideNumber]).addClass('active')
        switch (slideNumber) {
            case 0:
                $('.main-screen__slider-line').css('top', '13px');
                $('.main-slider__slide_1').addClass('active');
                break;
            case 1:
                $('.main-screen__slider-line').css('top', '38px');
                $('.main-slider__slide_2').addClass('active');
                break;
            case 2:
                $('.main-screen__slider-line').css('top', '64px');
                $('.main-slider__slide_3').addClass('active');
                break;
        }
    })

    /* MAIN SCREEN SLIDER END*/

    /* WHY SECTION SLIDER */
    let currentlyAnimating = false;
    $('.why__menu-item').on('click', function () {
        if (currentlyAnimating){
            return;
        }

        currentlyAnimating = true;
        $('.why__slide').removeClass('why__slide_active');
        $('.why__menu-item').removeClass('why__menu-item_active')
        const slideNumber = $(this).data().slide;
        $(this).addClass('why__menu-item_active')
        setTimeout(function () {
            $($('.why__slide')[slideNumber]).addClass('why__slide_active')
            currentlyAnimating = false;
        }, 1000)

    })

    // why section mobile slider
    $('.why__mobile-control-button').on('click', function () {
        let whySlideNum = $(this).data().mobslide;
        $('.why__mobile-control-button').removeClass('why__mobile-control-button_active');
        $(this).addClass('why__mobile-control-button_active')
        $('.why__mobile-slider-slide').removeClass('why__mobile-slider-slide_active');
        $($('.why__mobile-slider-slide')[whySlideNum]).addClass('why__mobile-slider-slide_active');
    });

    /* WHY SECTION SLIDER END*/

    /* CHOOSE ROOM SLIDER */
    // $('.slider-section__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     $('.slider-section__mobile-control-floor-number').html(currentSlide + 1)
    // })
    // $('.slider-section__slider').slick({
    //     // nextArrow: $('.slider-section__arrow-next'),
    //     // prevArrow: $('.slider-section__arrow-prev'),
    //     variableWidth: false,
    //     arrows: false, 
    //     slidesToShow: 1,
    //     infinity: true,
    //     fade: true,
    //     dots: true,
    //     appendDots: '.slider-section__dots-wrapper',
    //     responsive: [
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             adaptiveHeight: false
    //           }
    //         }
    //     ]
    // });

    $('.slider-section__slide-number').on('click', function () {
        $('.slider-section__slide-number').removeClass("slider-section__slide-number_active");
        $(this).addClass("slider-section__slide-number_active");
    })

    // Scroll bar 
    $('.slider-section__arrow-next').on('click', function(){

        dotsScroll();
    })
    
    $('.slider-section__arrow-prev').on('click', function(){

        dotsScroll();
    })
    if ($('.slider-section__dots-wrapper_roomb').length !=0){
        dotsScroll();
    }
    
    function dotsScroll(){
        let activeDot = $('.slick-dots').find('.slick-active');
        let activeDotTopPos = activeDot.position().top;
        let scrollingParentTopPos = $('.slider-section__dots-wrapper_roomb').scrollTop();
        $('.slider-section__dots-wrapper_roomb').scrollTop(activeDotTopPos + scrollingParentTopPos);
        
    }

    // Scroll bar end

    /* CHOOSE ROOM SLIDER END */

    /* ADVANTAGES SLIDER */
    customDots('advan-sec-slider', `.advan-sec-slider__img-slider-item`, '.advan-sec-slider__img-slider');
    $('.advan-sec-slider__text-slider').slick({
        asNavFor: '.advan-sec-slider__img-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.advan-sec-slider__arrow-left'),
        dots: false,
        arrows: false

        
    });

    $('.advan-sec-slider__img-slider').slick({
        asNavFor: '.advan-sec-slider__text-slider',
        arrows: false,
    });

    let transformValue = 0;
    let transformCorrection = 70;
    $('.advan-sec-slider__arrow-right').on('click', function(){
        $('.advan-sec-slider__img-slider').slick('slickNext');
        let currentSlide = $('.advan-sec-slider__img-slider').slick('slickCurrentSlide');
        if (currentSlide >= 0){
            transformValue -=transformCorrection;
           
        }
        if (currentSlide === 0){
            transformValue = 0;
          
        }
        $('.advan-sec-slider__control-button').removeClass('advan-sec-slider__control-button_active');
        $('.advan-sec-slider__control-button').css('left', `${transformValue}px`);
        $($('.advan-sec-slider__control-button')[currentSlide]).addClass('advan-sec-slider__control-button_active');
    });
    $('.advan-sec-slider__arrow-left').on('click', function(){
        $('.advan-sec-slider__img-slider').slick('slickPrev');
        let currentSlide = $('.advan-sec-slider__img-slider').slick('slickCurrentSlide');
            if (currentSlide === 0){
                transformValue = 0;
            }
            if (currentSlide  === $('.advan-sec-slider__img-slider-item').not('.slick-cloned').length - 1){
                transformValue = -transformCorrection * ($('.advan-sec-slider__img-slider-item').not('.slick-cloned').length - 1);
            }
            if (currentSlide < $('.advan-sec-slider__img-slider-item').not('.slick-cloned').length - 1 && currentSlide  > 0){
                transformValue += transformCorrection;
           }
           $('.advan-sec-slider__control-button').removeClass('advan-sec-slider__control-button_active');
           $('.advan-sec-slider__control-button').css('left', `${transformValue}px`);
           $($('.advan-sec-slider__control-button')[currentSlide]).addClass('advan-sec-slider__control-button_active');
    })
    // advantages slider custom number dots
    function customDots(sliderName, sliderItem, slider){
        let slidesArr = $(sliderItem).not('.slick-cloned');
        let slidesQtty = slidesArr.length;
        let $customDot = '';
        for (let i = 0; i < slidesQtty; i++){
            if (i + 1 > 9){
                $customDot = `<div class="${sliderName}__control-button" data-id="${i}">${i + 1}</div>`;
            } else {
            $customDot = `<div class="${sliderName}__control-button" data-id="${i}">0${i + 1}</div>`;
            }
            
            $($customDot).appendTo(`.${sliderName}__control-dots`);
        }
        $(`.${sliderName}__control-button`).first().addClass(`${sliderName}__control-button_active`);

        $(document).on('click', `.${sliderName}__control-button`, function(){
            $(`.${sliderName}__control-button`).removeClass(`${sliderName}__control-button_active`);
            $(this).addClass(`${sliderName}__control-button_active`);
            transformValue = -transformCorrection * $(this).data().id;
            $(`.${sliderName}__control-button`).css('left', `${transformValue}px`);
            $(slider).slick('slickGoTo', $(this).data().id);
           
        })

        $(slider).on('afterChange', function(event, slick, currentSlide, nextSlide){
            console.log(currentSlide)
            $(`.${sliderName}__control-button`).removeClass(`${sliderName}__control-button_active`);
            $($(`.${sliderName}__control-button`)[currentSlide]).addClass(`${sliderName}__control-button_active`);
            transformValue = -transformCorrection * currentSlide;
            $(`.${sliderName}__control-button`).css('left', `${transformValue}px`);
        })

    }

    /* ADVANTAGES SLIDER END*/
    /* CONTACTS MAP RESIZE */
    const mapResize = () => {
        let screenHeight = $(window).height();
        const contactsInnerHeight = $('.contacts__inner').outerHeight();
        const headerHeight = 64;
        const mapTopMargin = 40;
        const newMapHeight = (screenHeight - contactsInnerHeight - headerHeight - mapTopMargin) / 1.5;
        $('.contacts__map').css('height', newMapHeight);

    }
    mapResize();

    /* CONTACTS MAP RESIZE  END*/
    /* MAP PAGE MAP RESIZE */
    const mapPageResize = () => {
        if (windowWidth > 480){
            let screenHeight = $(window).height();
            const contactsInnerHeight = $('.infrasructure').find('.container').outerHeight();
            const headerHeight = 64;
            const mapTopMargin = 40;
            const newMapHeight = screenHeight - contactsInnerHeight - headerHeight - mapTopMargin;
            $('.infrasructure__map').css('height', newMapHeight);
        }

    }
    mapPageResize();

    /* MAP PAGE MAP RESIZE  END*/

    /* WEB CAM */

    $('.sec-1__control-item').on('click', function(){
        $('.sec-1__control-item').removeClass('sec-1__control-item_active');
        $('.sec-1__webcam').removeClass('sec-1__webcam_active');
        $(this).addClass('sec-1__control-item_active');
        $(`.sec-1__webcam[data-cam="${$(this).data().camid}"]`).addClass('sec-1__webcam_active');
    });

    /* WEB CAM END /*

    /* GALLERY SLIDER */
    let gallerytransformCorrection = 70;
    customDots('gallery','.gal-main-slider__item', '.gal-main-slider')
    $('.gal-main-slider').slick({
        arrows: false,
        asNavFor: '.gal-text-slider',
        fade: true
    });
    $('.gal-text-slider').slick({
        arrows: false,
        asNavFor: '.gal-main-slider',
        fade: true
    })

   
    $('.gallery__arrow-right').on('click', function(){
        $('.gal-main-slider').slick('slickNext');
        let currentSlide = $('.gal-main-slider').slick('slickCurrentSlide');
        if (currentSlide >= 0){
            transformValue -=gallerytransformCorrection;
           
        }
        if (currentSlide === 0){
            transformValue = 0;
          
        }
        $('.gallery__control-button').removeClass('gallery__control-button_active');
        $('.gallery__control-button').css('left', `${transformValue}px`);
        $($('.gallery__control-button')[currentSlide]).addClass('gallery__control-button_active');
    });
    $('.gallery__arrow-left').on('click', function(){
        $('.gal-main-slider').slick('slickPrev');
        let currentSlide = $('.gal-main-slider').slick('slickCurrentSlide');
            if (currentSlide === 0){
                transformValue = 0;
            }
            if (currentSlide  === $('.gal-main-slider__item').not('.slick-cloned').length - 1){
                transformValue = -gallerytransformCorrection * ($('.gal-main-slider__item').not('.slick-cloned').length - 1);
            }
            if (currentSlide < $('.gal-main-slider__item').not('.slick-cloned').length - 1 && currentSlide  > 0){
                transformValue += gallerytransformCorrection;
           }
           $('.gallery__control-button').removeClass('gallery__control-button_active');
           $('.gallery__control-button').css('left', `${transformValue}px`);
           $($('.gallery__control-button')[currentSlide]).addClass('gallery__control-button_active');
    })
    /* GALLERY SLIDER END */

    /* NEWS SLIDER */
    if (windowWidth <= 768){
        $('.news__sec-2').find('.row').slick({
            arrows: false,
            slidesToShow: 2,
            variableWidth: false
        })
    }
    if (windowWidth <= 480){
        $('.news__sec-2').find('.row').slick('unslick'
        )
    }
    /* NEWS SLIDER END*/

    /* SINGLE NEWS SLIDER */
    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.news-slider__arrow-prev').on('click', function(){
        $('.news-slider').slick('slickPrev')
    })
    $('.news-slider__arrow-next').on('click', function(){
        $('.news-slider').slick('slickNext')
    })
    /* SINGLE NEES SLIDER END */
    /* HOVER EFFECT */


        // var myAnimation = new hoverEffect({
        //     parent: document.querySelector('.architect__image-wrapper'),
        //     image1: 'assets/images/main-screen-hover-1.jpg',
        //     image2: 'assets/images/main-screen-hover-2.jpg',
        //     displacementImage: 'assets/images/displacement.png'
        // });

    Array.from(document.querySelectorAll('.architect__image-wrapper')).forEach((el) => {
        const imgs = Array.from(el.querySelectorAll('img'));
       let a = new hoverEffect({
           parent: el,
           intensity: el.dataset.intensity || undefined,
           speedIn: el.dataset.speedin || undefined,
           speedOut: el.dataset.speedout || undefined,
           easing: el.dataset.easing || undefined,
           hover: el.dataset.hover || undefined,
           image1: imgs[0].getAttribute('src'),
           image2: imgs[1].getAttribute('src'),
           displacementImage: el.dataset.displacement,
        //    otherHoverEl: document.querySelector('.about .left'),
        //    showElements: document.querySelectorAll('.about .left .text, .about .left .link'),
       });
    });
    /* HOVER EFFECT END */







    /* ORIENTATION CHANGE RELOAD */
      window.addEventListener("orientationchange", function() {
        window.location.reload();
    }, false);
    /* ORIENTATION CHANGE RELOAD END*/


    /* CONSTRUCTION SECTION SCRIPTS */
    if ($('.construction__month-choice').length != 0){
        let labels = $('.construction__month-choice').find('label');
        let activeLabelIndex = $(labels).index($('.active'));
        let clickCounter = activeLabelIndex;
        let activeIndexPos = $('.construction__month-choice').find('label.active').position().left;
        $('.construction__month-choice').find('label').css('right', `${activeIndexPos}px`);
    }
    

    $('.construction__arrow-prev').on('click', function(){
        let currentLabelWdth = $($(labels)[clickCounter]).outerWidth(true);
        if (clickCounter > 0){
            $('.construction__month-choice').find('label').css('right', `-=${currentLabelWdth}`);
            clickCounter -=1;
        }
       
    })
    $('.construction__arrow-next').on('click', function(){
        let currentLabelWdth = $($(labels)[clickCounter]).outerWidth(true);
        if (clickCounter < 10){
            $('.construction__month-choice').find('label').css('right', `+=${currentLabelWdth}`);
            clickCounter +=1;
        }
        
    })
    const constructionSliderInit = () => {
        $('.construction__slider').slick({
            arrows: false,
        });
        $('.construction__img-arrow-next').on('click', function(){
            $('.construction__slider').slick('slickNext');
        })
        $('.construction__img-arrow-prev').on('click', function(){
            $('.construction__slider').slick('slickPrev');
        })
    }
    constructionSliderInit();



    $('.construction__month-choice').find('input[type="radio"]').on('change', function(){
        let labels = $('.construction__month-choice').find('label');
        $(labels).removeClass('active');
        $(this).prev().addClass('active');
        
        $.ajax({
            method: "POST",
            url: "/wp-admin/admin-ajax.php",
            data:  {
                action: 'construct',
                data: {
                    year: $(".construction__form").serializeArray()[0].value,
                    month: $(".construction__form").serializeArray()[1].value
                },
                
            }
            })
          .done(function( msg ) {
            $('.construction__content').html(msg);
            setTimeout(function(){
                constructionSliderInit();
            }, 100)
            
            
          });
          
    })
    
    /* CONSTRUCTION SECTION SCRIPTS END*/


    /* FORM */
    function removeNodeByDelay(node, delay) {
        setTimeout(() => {
            node.remove()
        }, delay)
    }

    function ValidName(name) {
        if (name.length > 0){
            return true;
        }
       
    }

    function ValidPhone(phone) {
        if (phone.length > 0){
            return true;
        }
    }
    function sendAjaxForm(url, selectorForm) {
        const status = {
            sucess: 'Спасибо за заявку мы с вами свяжемся в ближайшее время',
            error: 'Ошибка на сервере повторите попытку позже'
        }

        $.ajax({
            url: url, //url страницы (action_ajax_form.php)
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $(selectorForm).serialize(),  // Сеарилизуем объект
            success: function (response) { //Данные отправлены успешно
                $(selectorForm).find(`.phone-order-form__status`).html(status.sucess);
                $(selectorForm)[0].reset();
            },
            error: function (response) { // Данные не отправлены
                $(selectorForm).find(`.phone-order-form__status`).html(status.error);
                $(selectorForm)[0].reset();
            }
        });
    }

    $('#main-form').find('.phone-order-form__btn').on('click', function(e){
        e.preventDefault();
        let $nameInput = $('#main-form').find('.phone-order-form__input[name=name]')[0].value;
        let $phoneInput = $('#main-form').find('.phone-order-form__input[name=phone]')[0].value;
        if (ValidPhone($phoneInput) && ValidName($nameInput)){
            sendAjaxForm('./static/form.php', '#main-form');
        }
    })

    $('#popup-form').find('.phone-order-form__btn').on('click', function(e){
        e.preventDefault();
        let $nameInput = $('#popup-form').find('.phone-order-form__input[name=name]')[0].value;
        let $phoneInput = $('#popup-form').find('.phone-order-form__input[name=phone]')[0].value;
        if (ValidPhone($phoneInput) && ValidName($nameInput)){
            sendAjaxForm('./static/form.php', '#popup-form');
        }
    })

    /* END FORM */

});