(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./menuItem":4}],2:[function(require,module,exports){
function Error(message) {
    this.message = message || 'Error'
  }
  
  module.exports = {
    Error: Error
  };
},{}],3:[function(require,module,exports){
var MenuItem = require('./menuItem').MenuItem;

    /**
 * Класс, параметры которого описывают гамбургер
 *
 * @param size Размер
 * @param stuffingName Название начинки
 * @constructor
 */

function Hamburger(size, stuffing) {
  MenuItem.call(this, 'Hamburger');
  this.size = size;
  this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.constructor = Hamburger;

Hamburger.SIZE_SMALL = { name: 'little burger', price: 50, calories: 20 };
Hamburger.SIZE_BIG = { name: 'big burger', price: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function() {
  return this.stuffing;
};

/**
 * Изменить начинку гамбургера
 */
Hamburger.prototype.setStuffing = function(newStuffing){
  return this.stuffing = newStuffing;
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function() {
  return this.size;
};

/**
 * Изменить размер гамбургера
 */
Hamburger.prototype.setSize = function(newSize){
  return this.size = newSize;
};

/**
 * Узнать цену гамбургера
 * @returns {number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function() {
  var stuffing = this.getStuffing();
  var size = this.getSize();
  
  return stuffing.price + size.price;
};

/**
 * Узнать калорийность гамбургера
 * @returns {number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function() {
  var stuffing = this.getStuffing();
  var size = this.getSize();

  return stuffing.calories + size.calories;
};

module.exports = {
  Hamburger: Hamburger
};
},{"./menuItem":4}],4:[function(require,module,exports){
var Hamburger = require('./hamburger').Hamburger;
/**
 * Класс, параметы которого описывают пункт меню
 *
 * @param itemType Тип
 * @constructor
 */

function MenuItem(itemType) {
    this.itemType = itemType;
}
  
  /**
   * Узнать тип пункта меню
   */
  MenuItem.prototype.getType = function() {
    return this.itemType;
  };
  
  module.exports = {
    MenuItem: MenuItem
  };
},{"./hamburger":3}],5:[function(require,module,exports){
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
},{"./drink":1,"./error":2,"./hamburger":3,"./salad":6}],6:[function(require,module,exports){
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
},{"./error":2,"./menuItem":4}],7:[function(require,module,exports){
var Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

var order = new Order();

order.addToOrder(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE));
order.addToOrder(new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO));
order.addToOrder(new Salad(Salad.TYPE_OLIVIE, 300));
order.addToOrder(new Drink(Drink.TYPE_COLA));

console.log(order.getDishes());

order.deletePositionFromOrder(4);
console.log(order.getDishes());

order.pay();

order.deletePositionFromOrder(1);

console.log('total price: ' + order.calculateTotalPrice());
console.log('total calories: ' + order.calculateTotalCalories());
},{"./drink":1,"./hamburger":3,"./order":5,"./salad":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL9Cb0LXQvdCwINCe0LTQvdC+0YjQuNCy0LrQuNC90LAvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRyaW5rLmpzIiwiZXJyb3IuanMiLCJoYW1idXJnZXIuanMiLCJtZW51SXRlbS5qcyIsIm9yZGVyLmpzIiwic2FsYWQuanMiLCJ0ZXN0T3JkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIE1lbnVJdGVtID0gcmVxdWlyZSgnLi9tZW51SXRlbScpLk1lbnVJdGVtO1xyXG5cclxuLyoqXHJcbiAqINCa0LvQsNGB0YEsINC/0LDRgNCw0LzQtdGC0YDRiyDQutC+0YLQvtGA0L7Qs9C+INC+0L/QuNGB0YvQstCw0Y7RgiDQvdCw0L/QuNGC0L7QulxyXG4gKiBAcGFyYW0gdHlwZSDQotC40L9cclxuICovXHJcbmZ1bmN0aW9uIERyaW5rKHR5cGUpIHtcclxuICBNZW51SXRlbS5jYWxsKHRoaXMsICdEcmluaycpO1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbn1cclxuXHJcbkRyaW5rLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVudUl0ZW0ucHJvdG90eXBlKTtcclxuRHJpbmsuY29uc3RydWN0b3IgPSBEcmluaztcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0YLQuNC/INC90LDQv9C40YLQutCwXHJcbiAqL1xyXG5Ecmluay5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICB9O1xyXG5cclxuRHJpbmsuVFlQRV9DT0xBID0geyBuYW1lOiAnY29sYScsIHByaWNlOiA1MCwgY2Fsb3JpZXM6IDQwIH07XHJcbkRyaW5rLlRZUEVfVEVBID0geyBuYW1lOiAnY29mZmVlJywgcHJpY2U6IDgwLCBjYWxvcmllczogMjAgfTtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0YbQtdC90YMg0L3QsNC/0LjRgtC60LBcclxuICogQHJldHVybnMge251bWJlcn0g0KbQtdC90LAg0LIg0YLRg9Cz0YDQuNC60LDRhVxyXG4gKi9cclxuRHJpbmsucHJvdG90eXBlLmNhbGN1bGF0ZVByaWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMudHlwZS5wcmljZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0LrQsNC70L7RgNC40LnQvdC+0YHRgtGMINC90LDQv9C40YLQutCwXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9INCa0LDQu9C+0YDQuNC50L3QvtGB0YLRjCDQsiDQutCw0LvQvtGA0LjRj9GFXHJcbiAqL1xyXG5Ecmluay5wcm90b3R5cGUuY2FsY3VsYXRlQ2Fsb3JpZXMgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy50eXBlLmNhbG9yaWVzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgRHJpbms6IERyaW5rXHJcbn07IiwiZnVuY3Rpb24gRXJyb3IobWVzc2FnZSkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnRXJyb3InXHJcbiAgfVxyXG4gIFxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgRXJyb3I6IEVycm9yXHJcbiAgfTsiLCJ2YXIgTWVudUl0ZW0gPSByZXF1aXJlKCcuL21lbnVJdGVtJykuTWVudUl0ZW07XHJcblxyXG4gICAgLyoqXHJcbiAqINCa0LvQsNGB0YEsINC/0LDRgNCw0LzQtdGC0YDRiyDQutC+0YLQvtGA0L7Qs9C+INC+0L/QuNGB0YvQstCw0Y7RgiDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICpcclxuICogQHBhcmFtIHNpemUg0KDQsNC30LzQtdGAXHJcbiAqIEBwYXJhbSBzdHVmZmluZ05hbWUg0J3QsNC30LLQsNC90LjQtSDQvdCw0YfQuNC90LrQuFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG5mdW5jdGlvbiBIYW1idXJnZXIoc2l6ZSwgc3R1ZmZpbmcpIHtcclxuICBNZW51SXRlbS5jYWxsKHRoaXMsICdIYW1idXJnZXInKTtcclxuICB0aGlzLnNpemUgPSBzaXplO1xyXG4gIHRoaXMuc3R1ZmZpbmcgPSBzdHVmZmluZztcclxufVxyXG5cclxuSGFtYnVyZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVudUl0ZW0ucHJvdG90eXBlKTtcclxuSGFtYnVyZ2VyLmNvbnN0cnVjdG9yID0gSGFtYnVyZ2VyO1xyXG5cclxuSGFtYnVyZ2VyLlNJWkVfU01BTEwgPSB7IG5hbWU6ICdsaXR0bGUgYnVyZ2VyJywgcHJpY2U6IDUwLCBjYWxvcmllczogMjAgfTtcclxuSGFtYnVyZ2VyLlNJWkVfQklHID0geyBuYW1lOiAnYmlnIGJ1cmdlcicsIHByaWNlOiAxMDAsIGNhbG9yaWVzOiA0MCB9O1xyXG5cclxuSGFtYnVyZ2VyLlNUVUZGSU5HX0NIRUVTRSA9IHsgbmFtZTogJ2NoZWVzZScsIHByaWNlOiAxMCwgY2Fsb3JpZXM6IDIwIH07XHJcbkhhbWJ1cmdlci5TVFVGRklOR19TQUxBRCA9IHsgbmFtZTogJ3NhbGFkJywgcHJpY2U6IDIwLCBjYWxvcmllczogNSB9O1xyXG5IYW1idXJnZXIuU1RVRkZJTkdfUE9UQVRPID0geyBuYW1lOiAncG90YXRvJywgcHJpY2U6IDE1LCBjYWxvcmllczogMTAgfTtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0L3QsNGH0LjQvdC60YMg0LPQsNC80LHRg9GA0LPQtdGA0LBcclxuICovXHJcbkhhbWJ1cmdlci5wcm90b3R5cGUuZ2V0U3R1ZmZpbmcgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5zdHVmZmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQmNC30LzQtdC90LjRgtGMINC90LDRh9C40L3QutGDINCz0LDQvNCx0YPRgNCz0LXRgNCwXHJcbiAqL1xyXG5IYW1idXJnZXIucHJvdG90eXBlLnNldFN0dWZmaW5nID0gZnVuY3Rpb24obmV3U3R1ZmZpbmcpe1xyXG4gIHJldHVybiB0aGlzLnN0dWZmaW5nID0gbmV3U3R1ZmZpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICog0KPQt9C90LDRgtGMINGA0LDQt9C80LXRgCDQs9Cw0LzQsdGD0YDQs9C10YDQsFxyXG4gKi9cclxuSGFtYnVyZ2VyLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuc2l6ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQmNC30LzQtdC90LjRgtGMINGA0LDQt9C80LXRgCDQs9Cw0LzQsdGD0YDQs9C10YDQsFxyXG4gKi9cclxuSGFtYnVyZ2VyLnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24obmV3U2l6ZSl7XHJcbiAgcmV0dXJuIHRoaXMuc2l6ZSA9IG5ld1NpemU7XHJcbn07XHJcblxyXG4vKipcclxuICog0KPQt9C90LDRgtGMINGG0LXQvdGDINCz0LDQvNCx0YPRgNCz0LXRgNCwXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9INCm0LXQvdCwINCyINGC0YPQs9GA0LjQutCw0YVcclxuICovXHJcbkhhbWJ1cmdlci5wcm90b3R5cGUuY2FsY3VsYXRlUHJpY2UgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgc3R1ZmZpbmcgPSB0aGlzLmdldFN0dWZmaW5nKCk7XHJcbiAgdmFyIHNpemUgPSB0aGlzLmdldFNpemUoKTtcclxuICBcclxuICByZXR1cm4gc3R1ZmZpbmcucHJpY2UgKyBzaXplLnByaWNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqINCj0LfQvdCw0YLRjCDQutCw0LvQvtGA0LjQudC90L7RgdGC0Ywg0LPQsNC80LHRg9GA0LPQtdGA0LBcclxuICogQHJldHVybnMge251bWJlcn0g0JrQsNC70L7RgNC40LnQvdC+0YHRgtGMINCyINC60LDQu9C+0YDQuNGP0YVcclxuICovXHJcbkhhbWJ1cmdlci5wcm90b3R5cGUuY2FsY3VsYXRlQ2Fsb3JpZXMgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgc3R1ZmZpbmcgPSB0aGlzLmdldFN0dWZmaW5nKCk7XHJcbiAgdmFyIHNpemUgPSB0aGlzLmdldFNpemUoKTtcclxuXHJcbiAgcmV0dXJuIHN0dWZmaW5nLmNhbG9yaWVzICsgc2l6ZS5jYWxvcmllcztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIEhhbWJ1cmdlcjogSGFtYnVyZ2VyXHJcbn07IiwidmFyIEhhbWJ1cmdlciA9IHJlcXVpcmUoJy4vaGFtYnVyZ2VyJykuSGFtYnVyZ2VyO1xyXG4vKipcclxuICog0JrQu9Cw0YHRgSwg0L/QsNGA0LDQvNC10YLRiyDQutC+0YLQvtGA0L7Qs9C+INC+0L/QuNGB0YvQstCw0Y7RgiDQv9GD0L3QutGCINC80LXQvdGOXHJcbiAqXHJcbiAqIEBwYXJhbSBpdGVtVHlwZSDQotC40L9cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gTWVudUl0ZW0oaXRlbVR5cGUpIHtcclxuICAgIHRoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcclxufVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqINCj0LfQvdCw0YLRjCDRgtC40L8g0L/Rg9C90LrRgtCwINC80LXQvdGOXHJcbiAgICovXHJcbiAgTWVudUl0ZW0ucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1UeXBlO1xyXG4gIH07XHJcbiAgXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBNZW51SXRlbTogTWVudUl0ZW1cclxuICB9OyIsInZhciBFcnJvciA9IHJlcXVpcmUoJy4vZXJyb3InKS5FcnJvcixcclxuSGFtYnVyZ2VyID0gcmVxdWlyZSgnLi9oYW1idXJnZXInKS5IYW1idXJnZXIsXHJcbkRyaW5rID0gcmVxdWlyZSgnLi9kcmluaycpLkRyaW5rLFxyXG5TYWxhZCA9IHJlcXVpcmUoJy4vc2FsYWQnKS5TYWxhZDtcclxuXHJcbi8qKlxyXG4gKiDQmtC70LDRgdGBLCDQvtCx0YrQtdC60YLRiyDQutC+0YLQvtGA0L7Qs9C+INC+0L/QuNGB0YvQstCw0Y7RgiDQt9Cw0LrQsNC3XHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0gaXNQYWlkINCe0L/Qu9Cw0YfQtdC9INC70Lgg0LfQsNC60LDQt1xyXG4gKiBAcGFyYW0gZGlzaGVzINCR0LvRjtC00LAg0LIg0LfQsNC60LDQt9C1XHJcbiAqL1xyXG5mdW5jdGlvbiBPcmRlcigpIHtcclxuICB0aGlzLmRpc2hlcyA9IFtdO1xyXG4gIHRoaXMuaXNQYWlkID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0L7Qv9C70LDRh9C10L0g0LvQuCDQt9Cw0LrQsNC3XHJcbiAqL1xyXG5PcmRlci5wcm90b3R5cGUuZ2V0UGFpZCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLmlzUGFpZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQn9C+0LvRg9GH0LjRgtGMINGB0L/QuNGB0L7QuiDQsdC70Y7QtCDQsiDQt9Cw0LrQsNC30LVcclxuICovXHJcbk9yZGVyLnByb3RvdHlwZS5nZXREaXNoZXMgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5kaXNoZXM7XHJcbn07XHJcblxyXG4vKipcclxuICog0JTQvtCx0LDQstC40YLRjCDQsdC70Y7QtNC+INCyINC30LDQutCw0LdcclxuICogQHBhcmFtIGl0ZW0g0JHQu9GO0LTQvlxyXG4gKi9cclxuT3JkZXIucHJvdG90eXBlLmFkZFRvT3JkZXIgPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgaWYgKCF0aGlzLmdldFBhaWQoKSkge1xyXG4gICAgdGhpcy5kaXNoZXMucHVzaChpdGVtKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdBZGRpbmcgYW4gaXRlbSBhZnRlciBwYXlpbmcgZm9yIHRoZSBvcmRlciBpcyBwcm9oaWJpdGVkLicpXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINCj0LTQsNC70LjRgtGMINCx0LvRjtC00L4g0LjQtyDQt9Cw0LrQsNC30LAg0L/QviDQvdC+0LzQtdGA0YMg0L/QvtC30LjRhtC40LhcclxuICogQHBhcmFtIGluZGV4INCf0L7Qt9C40YbQuNGPINCx0LvRjtC00LBcclxuICovXHJcbk9yZGVyLnByb3RvdHlwZS5kZWxldGVQb3NpdGlvbkZyb21PcmRlciA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgaWYgKCF0aGlzLmdldFBhaWQoKSkge1xyXG4gICAgdmFyIGRpc2hQb3NpdGlvbiA9IGluZGV4IC0gMTtcclxuICAgIHRoaXMuZ2V0RGlzaGVzKCkuc3BsaWNlKGRpc2hQb3NpdGlvbiwgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGVsZXRpbmcgb2YgaXRlbSB3YXMgcmVqZWN0ZWQuIE9yZGVyIGlzIGNsb3NlZCcpXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINCj0LfQvdCw0YLRjCDQv9C+0LvQvdGD0Y4g0YHRgtC+0LjQvNC+0YHRgtGMINC30LDQutCw0LfQsFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSDQptC10L3QsCDQsiDRgtGD0LPRgNC40LrQsNGFXHJcbiAqL1xyXG5PcmRlci5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxQcmljZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciB0aGlzT3JkZXIgPSB0aGlzLmdldERpc2hlcygpO1xyXG4gIGlmICh0aGlzT3JkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXNPcmRlci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgdG90YWxQcmljZSArPSB0aGlzT3JkZXJbaW5kZXhdLmNhbGN1bGF0ZVByaWNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWxQcmljZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcmljZSBjb3VudGluZyBpcyBub3QgYXZhaWxhYmxlLiBPcmRlciBpcyBlbXB0eScpXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINCj0LfQvdCw0YLRjCDQutCw0LvQvtGA0LjQudC90L7RgdGC0Ywg0LfQsNC60LDQt9CwXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9INCa0LDQu9C+0YDQuNC50L3QvtGB0YLRjCDQsiDQutCw0LvQvtGA0LjRj9GFXHJcbiAqL1xyXG5PcmRlci5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxDYWxvcmllcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciB0aGlzT3JkZXIgPSB0aGlzLmdldERpc2hlcygpO1xyXG4gIGlmICh0aGlzT3JkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyIHRvdGFsQ2Fsb3JpZXMgPSAwO1xyXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXNPcmRlci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgdG90YWxDYWxvcmllcyArPSB0aGlzT3JkZXJbaW5kZXhdLmNhbGN1bGF0ZUNhbG9yaWVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWxDYWxvcmllcztcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxvcmllIGNvdW50aW5nIGlzIG5vdCBhdmFpbGFibGUuIE9yZGVyIGlzIGVtcHR5Jyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINCe0L/Qu9Cw0YLQuNGC0Ywg0LfQsNC60LDQt1xyXG4gKi9cclxuT3JkZXIucHJvdG90eXBlLnBheSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuaXNQYWlkID0gdHJ1ZTtcclxuICBPYmplY3QuZnJlZXplKHRoaXMuZGlzaGVzKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIE9yZGVyOiBPcmRlclxyXG59OyIsInZhciBNZW51SXRlbSA9IHJlcXVpcmUoJy4vbWVudUl0ZW0nKS5NZW51SXRlbSxcclxuICAgIEVycm9yID0gcmVxdWlyZSgnLi9lcnJvcicpLkVycm9yO1xyXG5cclxuLyoqXHJcbiAqINCa0LvQsNGB0YEsINC+0LHRitC10LrRgtGLINC60L7RgtC+0YDQvtCz0L4g0L7Qv9C40YHRi9Cy0LDRjtGCINC/0LDRgNCw0LzQtdGC0YDRiyDRgdCw0LvQsNGC0LBcclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB0eXBlINCi0LjQv1xyXG4gKiBAcGFyYW0gd2VpZ2h0INCS0LXRgVxyXG4gKi9cclxuZnVuY3Rpb24gU2FsYWQodHlwZSwgd2VpZ2h0KSB7XHJcbiAgTWVudUl0ZW0uY2FsbCh0aGlzLCAnU2FsYWQnKTtcclxuICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG59XHJcblxyXG5TYWxhZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lbnVJdGVtLnByb3RvdHlwZSk7XHJcblNhbGFkLmNvbnN0cnVjdG9yID0gU2FsYWQ7XHJcblxyXG4vKipcclxuICog0KbQtdC90LAg0Lgg0LrQsNC70L7RgNC40Lgg0YPQutCw0LfQsNC90Ysg0LfQsCAxMDDQsy5cclxuICovXHJcblNhbGFkLlRZUEVfQ0FFU0FSID0geyBuYW1lOiAnY2Flc2FyJywgcHJpY2U6IDEwMCwgY2Fsb3JpZXM6IDIwIH07XHJcblNhbGFkLlRZUEVfT0xJVklFID0geyBuYW1lOiAnb2xpdmllJywgcHJpY2U6IDUwLCBjYWxvcmllczogODAgfTtcclxuXHJcblNhbGFkLlNUQU5EQVJUX1dFSUdIVCA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0LLQtdGBINGB0LDQu9Cw0YLQsFxyXG4gKi9cclxuU2FsYWQucHJvdG90eXBlLmdldFdlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLndlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQmNC30LzQtdC90LjRgtGMINCy0LXRgSDRgdCw0LvQsNGC0LBcclxuICovXHJcblNhbGFkLnByb3RvdHlwZS5zZXRXZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA+IDEwMCkge1xyXG4gICAgdGhpcy53ZWlnaHQgPSB2YWx1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlaWdodCBjaGFuZ2UgaXMgbm90IHBvc3NpYmxlLiBXZWlnaHQgY2Fubm90IGJlIGxlc3MgdGhhbiAxMDAgZycpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0YbQtdC90YMg0YHQsNC70LDRgtCwLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSDQptC10L3QsCDQsiDRgtGD0LPRgNC40LrQsNGFXHJcbiAqL1xyXG5TYWxhZC5wcm90b3R5cGUuY2FsY3VsYXRlUHJpY2UgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcHJpY2VQZXJHcmFtID0gdGhpcy50eXBlLnByaWNlIC8gU2FsYWQuU1RBTkRBUlRfV0VJR0hUO1xyXG5cclxuICByZXR1cm4gcHJpY2VQZXJHcmFtICogdGhpcy5nZXRXZWlnaHQoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQo9C30L3QsNGC0Ywg0LrQsNC70L7RgNC40LnQvdC+0YHRgtGMINGB0LDQu9Cw0YLQsC5cclxuICogQHJldHVybnMge251bWJlcn0g0JrQsNC70L7RgNC40LnQvdC+0YHRgtGMINCyINC60LDQu9C+0YDQuNGP0YVcclxuICovXHJcblNhbGFkLnByb3RvdHlwZS5jYWxjdWxhdGVDYWxvcmllcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjYWxvcmllc1BlckdyYW0gPSB0aGlzLnR5cGUuY2Fsb3JpZXMgLyBTYWxhZC5TVEFOREFSVF9XRUlHSFQ7XHJcblxyXG4gIHJldHVybiBjYWxvcmllc1BlckdyYW0gKiB0aGlzLmdldFdlaWdodCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgU2FsYWQ6IFNhbGFkXHJcbn07IiwidmFyIE9yZGVyID0gcmVxdWlyZSgnLi9vcmRlcicpLk9yZGVyLFxyXG4gICAgSGFtYnVyZ2VyID0gcmVxdWlyZSgnLi9oYW1idXJnZXInKS5IYW1idXJnZXIsXHJcbiAgICBEcmluayA9IHJlcXVpcmUoJy4vZHJpbmsnKS5EcmluayxcclxuICAgIFNhbGFkID0gcmVxdWlyZSgnLi9zYWxhZCcpLlNhbGFkO1xyXG5cclxudmFyIG9yZGVyID0gbmV3IE9yZGVyKCk7XHJcblxyXG5vcmRlci5hZGRUb09yZGVyKG5ldyBIYW1idXJnZXIoSGFtYnVyZ2VyLlNJWkVfU01BTEwsIEhhbWJ1cmdlci5TVFVGRklOR19DSEVFU0UpKTtcclxub3JkZXIuYWRkVG9PcmRlcihuZXcgSGFtYnVyZ2VyKEhhbWJ1cmdlci5TSVpFX0JJRywgSGFtYnVyZ2VyLlNUVUZGSU5HX1BPVEFUTykpO1xyXG5vcmRlci5hZGRUb09yZGVyKG5ldyBTYWxhZChTYWxhZC5UWVBFX09MSVZJRSwgMzAwKSk7XHJcbm9yZGVyLmFkZFRvT3JkZXIobmV3IERyaW5rKERyaW5rLlRZUEVfQ09MQSkpO1xyXG5cclxuY29uc29sZS5sb2cob3JkZXIuZ2V0RGlzaGVzKCkpO1xyXG5cclxub3JkZXIuZGVsZXRlUG9zaXRpb25Gcm9tT3JkZXIoNCk7XHJcbmNvbnNvbGUubG9nKG9yZGVyLmdldERpc2hlcygpKTtcclxuXHJcbm9yZGVyLnBheSgpO1xyXG5cclxub3JkZXIuZGVsZXRlUG9zaXRpb25Gcm9tT3JkZXIoMSk7XHJcblxyXG5jb25zb2xlLmxvZygndG90YWwgcHJpY2U6ICcgKyBvcmRlci5jYWxjdWxhdGVUb3RhbFByaWNlKCkpO1xyXG5jb25zb2xlLmxvZygndG90YWwgY2Fsb3JpZXM6ICcgKyBvcmRlci5jYWxjdWxhdGVUb3RhbENhbG9yaWVzKCkpOyJdfQ==
