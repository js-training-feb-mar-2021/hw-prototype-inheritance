'use strict';

var payButton = function(payload, Parent) {
    var domElement = null;
    var allButtonsSelector = null;
    var allSubmitInputsSelector = null;
    var hiddenClass = null;

    function PayButton(data) {
        domElement = document.querySelector(data.buttonSelector);
        allButtonsSelector = data.allButtonsSelector;
        allSubmitInputsSelector = data.allSubmitInputsSelector;
        hiddenClass = data.hiddenClass;

        Parent.call(this, domElement);
    }
    
    PayButton.prototype = Object.create(Parent.prototype);

    function pay() {
        var allButtons = document.querySelectorAll(allButtonsSelector);
        var allSubmitInputs = document.querySelectorAll(allSubmitInputsSelector);
    
        Array.from(allButtons).concat(Array.from(allSubmitInputs)).forEach(function (button) {
            button.setAttribute('disabled', true);
        });
    }

    PayButton.prototype.render = function() {
        Parent.prototype.setListener('click', pay);
    };

    PayButton.prototype.setPayButtonState = function(orderList) {
        if (orderList.length) {
            domElement.classList.remove(hiddenClass);
     
            return;
         }
     
        domElement.classList.add(hiddenClass);
    };

    return new PayButton(payload);
};
