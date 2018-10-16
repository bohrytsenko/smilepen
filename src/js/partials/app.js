$( document ).ready(function() {

    // Load more

    $(document).ready(function(){

        var list = $(".products_item");
        var numToShow = 4;
        var button = $("#next");
        var numInList = list.length;
        list.hide();
        if (numInList > numToShow) {
            button.show();
        }
        list.slice(0, numToShow).show();

        button.click(function(){
            var showing = list.filter(':visible').length;
            list.slice(showing - 1, showing + numToShow).fadeIn();
            var nowShowing = list.filter(':visible').length;
            if (nowShowing >= numInList) {
                button.hide();
            }
        });

    });

    // FAQ

    $('.faq_item .faq_item__question a').on('click', function () {
        $('.faq_item').removeClass('faq_active');
        $(this).closest('.faq_item').toggleClass('faq_active');
    });

    // Navigation


    $('.header_wrap_row__nav a').on('click', function () {
        $('.header__over').toggleClass('header_over_active');
        $('.header__navigation').toggleClass('header__fixed');
    });

    $('.header__over').on('click', function () {
        $(this).removeClass('header_over_active');
        $('.header__navigation').removeClass('header__fixed');
    });

    // Quantity

    jQuery(document).ready(function(){
        $(".plus").click( function(e) {
            e.preventDefault();
            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";
            // Get its current value
            var currentVal = parseInt($(field).val());
            // If is not undefined
            if ( !isNaN(currentVal) && currentVal < 99 ) {
                // Increment
                $(field).val(currentVal + 1);
            }
        });

        // This button will decrement the value till 0
        $(".minus").click( function(e) {

            e.preventDefault();

            // Define field variable
            field = "input[name=" + $(this).attr("field") + "]";

            // Get its current value
            var currentVal = parseInt($(field).val());

            // If it isn't undefined or its greater than 0
            if ( !isNaN(currentVal) && currentVal > 1 ) {
                // Decrement one
                $(field).val(currentVal - 1);
            }

        });
    });

    // Slider single product


    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        loopedSlides: 4
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    // Delete total

    $('.cart_choose__delete').on('click', function () {
        $(this).parents('.cart_choose_item').fadeOut();
    });

    // Dropdown

    $('.ui.dropdown')
        .dropdown();

    // Rating

    $('.ui.rating')
        .rating('disable')
    ;

    // Bar

    $(".bar").each(function(){
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        },2000)
    });
});


