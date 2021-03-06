var FoodConstructor = function() {
    var price = 0;
    var calories = 0;
    var id = null;

    function Food(payload) {
        price = payload.reduce(function (acc, cur) {
            if (!acc) {
                return cur.price;
            }

            return acc + cur.price;
        }, 0);

        calories = payload.reduce(function (acc, cur) {
            if (!acc) {
                return cur.calories;
            }

            return acc + cur.calories;
        }, 0);

        id = Date.now();
    }

    Food.prototype.calculatePrice = function() {
        return price;
    };

    Food.prototype.getId = function() {
        return id;
    };

    Food.prototype.calculateCalories = function() {
        return calories;
    };

    Food.prototype.getDescription = function(data) {
        return data.map(function (item) {
            return item.description;
        }).join(', ');
    };

    return Food;
};
