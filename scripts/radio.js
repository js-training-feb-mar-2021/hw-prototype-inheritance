'use strict';

/** Изменение состояния радиокнопок */
var radio = function(payload, Parent) {
    var domElement = null;

    function Radio(data) {
        domElement = document.querySelector(data.containerSelector);

        Parent.call(this, domElement);
    }
    
    Radio.prototype = Object.create(Parent.prototype);

    function changeRadioState(target) {
        const formBlock = target.closest('.form__item');
        const blockItems = formBlock.querySelectorAll('input');
    
        Array.from(blockItems).forEach(function (item) {
            if (item.getAttribute('id') !== target.id) {
                item.removeAttribute('checked');
    
                return;
            }
    
            item.setAttribute('checked', true);
        })
    }

    function setCheckboxState(ev) {
        var targetType = ev.target.getAttribute('type');
    
        if (targetType === 'radio') {
            changeRadioState(ev.target);
        }
    }

    Radio.prototype.render = function() {
        Parent.prototype.setListener('click', setCheckboxState);
    };

    return new Radio(payload);
};
