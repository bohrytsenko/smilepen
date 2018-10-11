$( document ).ready(function() {

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

    // Navigation


    $('.header_wrap_row__nav a').on('click', function () {
        $('.header__over').toggleClass('header_over_active');
        $('.header__navigation').toggleClass('header__fixed');
    });

    $('.header__over').on('click', function () {
        $(this).removeClass('header_over_active');
        $('.header__navigation').removeClass('header__fixed');
    });
});


