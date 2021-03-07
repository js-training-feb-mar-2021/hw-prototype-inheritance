var MenuItem = require('./menuItem').MenuItem,
    Error = require('./error').Error;

/**
 * Класс, объекты которого описывают параметры салата
 *
 * @constructor
 * @param type Тип
 * @param weight Вес
 */
function Salad(type, weight) {
  MenuItem.call(this, 'Salad');
  this.type = type;
  this.weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.constructor = Salad;

/**
 * Цена и калории указаны за 100г.
 */
Salad.TYPE_CAESAR = { name: 'caesar', price: 100, calories: 20 };
Salad.TYPE_OLIVIE = { name: 'olivie', price: 50, calories: 80 };

Salad.STANDART_WEIGHT = 100;

/**
 * Узнать вес салата
 */
Salad.prototype.getWeight = function() {
  return this.weight;
};

/**
 * Изменить вес салата
 */
Salad.prototype.setWeight = function(value) {
  if (value > 100) {
    this.weight = value
  } else {
    throw new Error('Weight change is not possible. Weight cannot be less than 100 g');
  }
};

/**
 * Узнать цену салата.
 * @returns {number} Цена в тугриках
 */
Salad.prototype.calculatePrice = function() {
  var pricePerGram = this.type.price / Salad.STANDART_WEIGHT;

  return pricePerGram * this.getWeight();
};

/**
 * Узнать калорийность салата.
 * @returns {number} Калорийность в калориях
 */
Salad.prototype.calculateCalories = function() {
  var caloriesPerGram = this.type.calories / Salad.STANDART_WEIGHT;

  return caloriesPerGram * this.getWeight();
};

module.exports = {
  Salad: Salad
};