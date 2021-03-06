'use strict';

/** Удаление всех элементов заказа */
var orderReset = function(payload, Parent) {
    var domElement = null;
    var order = null;

    function OrderReset(data) {
        domElement = document.querySelector(data.buttonSelector);
        order = data.order;

        Parent.call(this, domElement);
    }
    
    OrderReset.prototype = Object.create(Parent.prototype);

    /** Обнуление заказа */
    function resetOrder() {
        order.resetOrder();
    }

    OrderReset.prototype.render = function() {
        Parent.prototype.setListener('click', resetOrder);
    };

    return new OrderReset(payload);
};