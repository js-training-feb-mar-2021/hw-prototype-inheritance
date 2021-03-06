'use strict';

(function() {
    /** Кнопка оплаты */
    var newPayButton = payButton({
        buttonSelector: '.order__pain',
        allButtonsSelector: 'button',
        allSubmitInputsSelector: '.form__submit',
        hiddenClass: 'order__pain_hidden',
    }, MainHandler());
    /** Чекбоксы */
    var newCheckbox = checkbox({
        containerSelector: '.form',
    }, MainHandler());
    /** Радиокнопки */
    var newRadio = radio({
        containerSelector: '.form',
    }, MainHandler());

    newPayButton.render();
    newCheckbox.render();
    newRadio.render();

    /** Заказ */
    var newOrder = order({
        payButton: newPayButton,
        orderTotalSelector: '.order__total',
        orderCaloriesSelector: '.order__calories',
        containerSelector: '.order__list',
    });
    /** Меню */
    var newMenu = menu({
        menuSelector: '.form',
        order: newOrder,
    }, MainHandler());

    newMenu.render();

    /** Кнопка обнуления заказа */
    var newOrderReset = orderReset({
        buttonSelector: '.order__reset',
        order: newOrder,
    }, MainHandler());

    newOrderReset.render();
}());

