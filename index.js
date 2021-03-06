function Hamburger(size, stuffing) {
  this.size = size.size;
  this.stuffing = stuffing.stuffing;
  this.price = size.price + stuffing.price;
  this.calories = size.calories + stuffing.calories;
}

Hamburger.SIZE_SMALL = { size: "small", price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { size: "large", price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { stuffing: "cheese", price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { stuffing: "salad", price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { stuffing: "potato", price: 15, calories: 10 };

Hamburger.prototype.getSize = function () {
  return this.size;
};

Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
  return this.price;
};

Hamburger.prototype.calculateCalories = function () {
  return this.calories;
};

function Salad(name, weight) {
  this.name = name.name;
  this.weight = weight;
  this.price = (weight / 100) * name.price;
  this.calories = (weight / 100) * name.calories;
}

Salad.CESAR = { name: "cesar", price: 100, calories: 20 };
Salad.OLIVIE = { name: "olivie", price: 50, calories: 80 };

Salad.prototype = Object.create(Hamburger.prototype);
Salad.prototype.constructor = Salad;

function Drink(name) {
  this.name = name.name;
  this.price = name.price;
  this.calories = name.calories;
}

Drink.COLA = { name: "cola", price: 50, calories: 40 };
Drink.COFFEE = { name: "coffee", price: 80, calories: 20 };

Drink.prototype = Object.create(Salad.prototype);
Drink.prototype.constructor = Drink;

function Order() {
  var args = Array.prototype.slice.call(arguments, 0);
  this.orderList = args;
  this.isPaid = false;
}

Order.prototype.totalPrice = function () {
  return this.orderList.reduce(function (acc, orderItem) {
    return acc + orderItem.calculatePrice();
  }, 0);
};

Order.prototype.totalCalories = function () {
  return this.orderList.reduce(function (acc, orderItem) {
    return acc + orderItem.calculateCalories();
  }, 0);
};

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
      if (
        item.price === orderItem.price &&
        item.calories === orderItem.calories &&
        item.constructor === orderItem.constructor
      )
        return false;
      else return true;
    });
  }
};

/* tests

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
var caesar = new Salad(Salad.CESAR, 150)
var cola = new Drink(Drink.COLA)
var coffee = new Drink(Drink.COFFEE)

var order1 = new Order(hamburger, caesar, cola)


console.log(order1)

order1.addOrderItem(coffee)
console.log(order1)

console.log(order1.totalPrice())
console.log(order1.totalCalories())

order1.pay()
order1.deleteOrderItem(caesar)
console.log(order1)

*/
