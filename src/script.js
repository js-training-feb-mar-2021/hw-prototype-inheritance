'use strict'

function Dish() {
    this.price = price;
    this.calories = calories;
}

Dish.prototype.calculatePrice = function () {
    return this.price;
}

Dish.prototype.calculateCalories = function () {
    return this.calories;
}

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };

Hamburger.prototype = Object.create(Dish.prototype);

Hamburger.prototype.getSize = function () {
    return this.size;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    return this.size.price + this.stuffing.price;
}

Hamburger.prototype.calculateCalories = function () {
    return this.size.calories + this.stuffing.calories;
}

function Salad(type, weight) {
    this.type = type;
    this.weight = weight;
}

Salad.CAESAR = { price: 100, calories: 20 };
Salad.OLIVIE = { price: 50, calories: 80 };

Salad.prototype = Object.create(Dish.prototype);

Salad.prototype.calculatePrice = function () {
    return (this.weight / 100) * this.price;
}

Salad.prototype.calculateCalories = function () {
    return (this.weight / 100) * this.calories;
}

function Drink(type) {
    this.type = type;
}

Drink.COLA = { type: 'cola', price: 50, calories: 40 };
Drink.COFFEE = { type: 'coffee', price: 80, calories: 20 };

Drink.prototype = Object.create(Dish.prototype);

function Order() {
    this.dishes = [];
    this.totalPrice = 0;
    this.totalCalories = 0;
    this.isPaid = false;
}

Order.prototype.addDish = function (dish) {
    if (!this.isPaid) {
        this.dishes.push(dish);
    } else {
        alert('You cannot change your order. Your order has been paid.');
    }
}

Order.prototype.removeDish = function (dish) {
    if (this.dishes.length !== 0) {
        this.dishes = this.dishes.filter(item => item !== dish);
    }
    if (this.isPaid) {
        alert('You cannot change your order. Your order has been paid.');
    }
}

Order.prototype.calculateTotalPrice = function () {
    return this.dishes.reduce((sum, dish) => {
        sum += dish.price;
    })
}

Order.prototype.calculateTotalCalories = function () {
    return this.dishes.reduce((sum, dish) => {
        sum += dish.calories;
    })
}

document.querySelector('.pay').addEventListener('click', event => {
    Order.isPaid = true;
})



