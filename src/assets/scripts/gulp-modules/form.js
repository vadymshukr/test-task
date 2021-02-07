const labelEffects = () => {
    $('.phone-order-form__input').on('focus', function(){
        $('.phone-order-form__label').removeClass('phone-order-form__label_active');
        $('.phone-order-form__input-group').removeClass('phone-order-form__input-group_active');
        let labelTarget = $(this).attr('name')
        $(`label[for=${labelTarget}]`).addClass('phone-order-form__label_active');
        $(this).parent().addClass('phone-order-form__input-group_active');
    });
    $('.phone-order-form__input').on('focusout', function(){
        $('.phone-order-form__label').removeClass('phone-order-form__label_active');
        $('.phone-order-form__input-group').removeClass('phone-order-form__input-group_active');
    });
}

labelEffects();