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