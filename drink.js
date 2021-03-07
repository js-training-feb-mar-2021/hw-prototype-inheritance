var MenuItem = require('./menuItem').MenuItem;

/**
 * Класс, параметры которого описывают напиток
 * @param type Тип
 */
function Drink(type) {
  MenuItem.call(this, 'Drink');
  this.type = type;
}

Drink.prototype = Object.create(MenuItem.prototype);
Drink.constructor = Drink;

/**
 * Узнать тип напитка
 */
Drink.prototype.getType = function() {
    return this.type;
  };

Drink.TYPE_COLA = { name: 'cola', price: 50, calories: 40 };
Drink.TYPE_TEA = { name: 'coffee', price: 80, calories: 20 };

/**
 * Узнать цену напитка
 * @returns {number} Цена в тугриках
 */
Drink.prototype.calculatePrice = function() {
  return this.type.price;
};

/**
 * Узнать калорийность напитка
 * @returns {number} Калорийность в калориях
 */
Drink.prototype.calculateCalories = function() {
  return this.type.calories;
};

module.exports = {
  Drink: Drink
};