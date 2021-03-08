"use strict";

var item1 = new Hamburger(Hamburger.STUFFING_CHEESE, Hamburger.SIZE_LARGE);
var item2 = new Salad(Salad.OLIVIE, 218);
var item3 = new Drink(Drink.COLA);

function Order() {
  var totalPrice = 0;
  var totalEnergy = 0;

  for (var i = 0; i < arguments.length; i++) {
    totalPrice = totalPrice + arguments[i].calculatePrice();
    totalEnergy = totalEnergy + arguments[i].calculateCalories();
  }

  ;
  this.totalPrice = totalPrice;
  this.totalEnergy = totalEnergy;
  var args = Array.prototype.slice.call(arguments, 0);
  this.orderList = args;
  this.isPaid = false;
}

Order.prototype.pay = function () {
  this.isPaid = true;
};

Order.prototype.addOrderItem = function (orderItem) {
  if (!this.isPaid) {
    this.orderList.push(orderItem);
  }
};

Order.prototype.deleteOrderItem = function (orderItem) {
  if (!this.isPaid) {
    this.orderList = this.orderList.filter(function (item) {
      if (item.price === orderItem.price && item.calories === orderItem.calories && item.constructor === orderItem.constructor) return false;else return true;
    });
  }
};

var test1 = new Order(item1);
var test2 = new Order(item1, item2);
var test3 = new Order(item1, item2, item3);
var test10cofe = new Order(item3, item3, item3, item3, item3, item3, item3, item3, item3, item3);