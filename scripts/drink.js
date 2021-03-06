var drink = function(payload, Parent) {
    var drink = [];

    function Drink(data) {
        drink = DRINK.filter((item) => data.includes(item.id));

        Parent.call(this, drink);
    }
    
    Drink.prototype = Object.create(Parent.prototype);

    Drink.prototype.getDescription = function() {
        var description = Parent.prototype.getDescription(drink);

        return 'Напитки: ' + String(description) + '.';
    };

    return new Drink(payload);
};
