'use strict';

/** Изменение состояния чекбоксов */
var menu = function(payload, Parent) {
    var domElement = null;
    var order = null;

    function Menu(data) {
        domElement = document.querySelector(data.menuSelector);
        order = data.order;

        Parent.call(this, domElement);
    }
    
    Menu.prototype = Object.create(Parent.prototype);

    /** Добавление нового элемента заказа */
    function submitNewOrderItem(ev) {
        ev.preventDefault();
    
        var formBlock = ev.submitter.closest('.form__fieldset');
    
        var blockName = formBlock.getAttribute('id');
    
        var blockItems = formBlock.querySelectorAll('input');
    
        order.createNewOrderItem(getBlockItems(blockName, blockItems), blockItems);
    }

    Menu.prototype.render = function() {
        Parent.prototype.setListener('submit', submitNewOrderItem);
    };

    return new Menu(payload);
};