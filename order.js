var Error = require('./error').Error,
Hamburger = require('./hamburger').Hamburger,
Drink = require('./drink').Drink,
Salad = require('./salad').Salad;

/**
 * Класс, объекты которого описывают заказ
 *
 * @constructor
 * @param isPaid Оплачен ли заказ
 * @param dishes Блюда в заказе
 */
function Order() {
  this.dishes = [];
  this.isPaid = false;
}

/**
 * Узнать оплачен ли заказ
 */
Order.prototype.getPaid = function() {
  return this.isPaid;
};

/**
 * Получить список блюд в заказе
 */
Order.prototype.getDishes = function() {
  return this.dishes;
};

/**
 * Добавить блюдо в заказ
 * @param item Блюдо
 */
Order.prototype.addToOrder = function(item) {
  if (!this.getPaid()) {
    this.dishes.push(item);
  } else {
    throw new Error('Adding an item after paying for the order is prohibited.')
  }
};

/**
 * Удалить блюдо из заказа по номеру позиции
 * @param index Позиция блюда
 */
Order.prototype.deletePositionFromOrder = function(index) {
  if (!this.getPaid()) {
    var dishPosition = index - 1;
    this.getDishes().splice(dishPosition, 1);
  } else {
    throw new Error('Deleting of item was rejected. Order is closed')
  }
};

/**
 * Узнать полную стоимость заказа
 * @returns {number} Цена в тугриках
 */
Order.prototype.calculateTotalPrice = function() {
  var thisOrder = this.getDishes();
  if (thisOrder.length > 0) {
    var totalPrice = 0;
    for (var index = 0; index < thisOrder.length; index++) {
      totalPrice += thisOrder[index].calculatePrice();
    }
    return totalPrice;
  } else {
    throw new Error('Price counting is not available. Order is empty')
  }
};

/**
 * Узнать калорийность заказа
 * @returns {number} Калорийность в калориях
 */
Order.prototype.calculateTotalCalories = function() {
  var thisOrder = this.getDishes();
  if (thisOrder.length > 0) {
    var totalCalories = 0;
    for (var index = 0; index < thisOrder.length; index++) {
      totalCalories += thisOrder[index].calculateCalories();
    }
    return totalCalories;
  } else {
    throw new Error('Calorie counting is not available. Order is empty');
  }
};

/**
 * Оплатить заказ
 */
Order.prototype.pay = function() {
  this.isPaid = true;
  Object.freeze(this.dishes);
};

module.exports = {
  Order: Order
};