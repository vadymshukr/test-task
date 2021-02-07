$('.phone-order').on('click', function (e) {
    e.preventDefault();
    const popup = $( '.popup' );
    let screenTop = $(document).scrollTop();
    $(popup).css('top', screenTop).addClass('popup_active');
    $('body').addClass('lock');

    $('.popup__close').on('click', function () {
        $(popup).removeClass('popup_active');
        $('body').removeClass('lock');
    })
});