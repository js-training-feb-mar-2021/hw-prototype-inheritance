'use strict';

var salad = function(payload, Parent) {
    var salad = [];
    var grams = 0;

    function Salad(data) {
        salad = SALAD.filter(function (item) {
            return data.salad.includes(item.id);
        });

        grams = data.grams || 0;

        Parent.call(this, salad);
    }
    
    Salad.prototype = Object.create(Parent.prototype);
    
    Salad.prototype.getGrams = function() {
        return grams;
    };

    Salad.prototype.calculatePrice = function() {
        return Math.floor((salad[0].price / 100) * grams);
    };

    Salad.prototype.calculateCalories = function() {
        return Math.floor((salad[0].calories / 100) * grams);
    };

    Salad.prototype.getDescription = function() {
        var description = Parent.prototype.getDescription(salad);

        return 'Салаты: ' + String(description) + ' (' + String(grams) + 'гр).';
    };

    return new Salad(payload);
};
