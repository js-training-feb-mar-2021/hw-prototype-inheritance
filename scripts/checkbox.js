'use strict';

/** Изменение состояния чекбоксов */
var checkbox = function(payload, Parent) {
    var domElement = null;

    function Checkbox(data) {
        domElement = document.querySelector(data.containerSelector);

        Parent.call(this, domElement);
    }
    
    Checkbox.prototype = Object.create(Parent.prototype);

    function changeChackboxState(target) {
        if (target.hasAttribute('checked')) {
            target.removeAttribute('checked');
    
            return;
        }
    
        target.setAttribute('checked', true);
    }

    function setCheckboxState(ev) {
        var targetType = ev.target.getAttribute('type');
    
        if (targetType === 'checkbox') {
            changeChackboxState(ev.target);
        }
    }

    Checkbox.prototype.render = function() {
        Parent.prototype.setListener('click', setCheckboxState);
    };

    return new Checkbox(payload);
};
