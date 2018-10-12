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


