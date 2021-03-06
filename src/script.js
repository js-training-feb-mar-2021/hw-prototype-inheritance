'use strict'

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };

Hamburger.prototype.getSize = function () {
    return this.size;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    return this.price;
}

Hamburger.prototype.calculateCalories = function () {
    return this.calories;
}

function Salad(type, weight) {
    this.type = type;
    this.weight = weight;
}

Salad.CAESAR = { price: 100, calories: 20 };
Salad.OLIVIE = { price: 50, calories: 80 };

function Drink(type) {
    this.type = type;
    this.calories = type.calories;
    this.price = type.price;
}

Drink.COLA = { type: 'cola', price: 50, calories: 40 };
Drink.COFFEE = { type: 'coffee', price: 80, calories: 20 }



