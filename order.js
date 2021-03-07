function Product() {
    this.price = price;
    this.calories = calories;
}
Product.prototype.calculatePrice = function () {
    return this.price;
}
Product.prototype.calculateCalories = function() {
    return this.calories;
}
function Hamburger(stuffing, size, quantity) {
    this.stuffing = stuffing;
    this.size = size;
    this.quantity = quantity;
}
Hamburger.prototype = Object.create(Product);
Hamburger.STAFFING_SALAD = {
    name: 'Hamburger with salad',
    price: 20,
    calories: 5,
    stuffing: "Salad"
};
Hamburger.STAFFING_POTATO = {
    name: 'Hamburger with potato',
    price: 15,
    calories: 10,
    stuffing: "Potato"
};

Hamburger.STAFFING_CHEESE = {
    name: 'Hamburger with cheese',
    price: 10,
    calories: 20,
    stuffing: "Cheese"
};
Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
    size: "small"
};
Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
    size: "large"
};
Hamburger.prototype.getSize = function () {
    return this.size.size;
};
Hamburger.prototype.getStuffing = function () {
    return this.stuffing.stuffing;
};
Hamburger.prototype.calculatePrice = function () {
    return (this.size.price + this.stuffing.price) * this.getQuantity();
};
Hamburger.prototype.calculateCalories = function () {
    return (this.size.calories + this.stuffing.calories) * this.getQuantity();
};
Hamburger.prototype.getQuantity = function () {
    return this.quantity;
};
Hamburger.prototype.getName = function () {
    return this.stuffing.name + ' ' + this.size.size;
}
function Drink(drink, quantity) {
    this.drink = drink;
    this.quantity = quantity;
}
Drink.prototype = Object.create(Product);
Drink.NAME_COLA = {
    name: "Cola",
    price: 50,
    calories: 40
};
Drink.NAME_COFFEE = {
    name: "Coffee",
    price: 80,
    calories: 20
};
Drink.prototype.getName = function () {
    return this.drink.name;
};
Drink.prototype.getQuantity = function () {
    return this.quantity;
};
Drink.prototype.calculatePrice = function () {
    return this.drink.price * this.getQuantity();
};
Drink.prototype.calculateCalories = function () {
    return this.drink.calories * this.getQuantity();
};

function Salad(salad, weight) {
    this.salad = salad;
    this.weight = weight;
}
Salad.prototype = Object.create(Product);
Salad.NAME_CEZAR = {
    name: "Cezar",
    price: 100,
    calories: 20
};
Salad.NAME_OLIVIE = {
    name: "Olivie",
    price: 50,
    calories: 80
};
Salad.prototype.getWeight = function () {
    return this.weight;
};
Salad.prototype.getName = function () {
    return this.salad.name;
};
Salad.prototype.calculatePrice = function () {
    return (this.salad.price * this.getWeight()) / 100;
};
Salad.prototype.calculateCalories = function () {
    return (this.salad.calories * this.getWeight()) / 100;
};

function Order() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    this.items = args;
    this.isPayed = false;
}
Order.prototype.changeStatusOfPayment = function () {
    this.isPayed = !this.isPayed;
};
Order.prototype.getStatusOfPayment = function () {
    return this.isPayed;
};
Order.prototype.getItems = function () {
    return this.items;
};
Order.prototype.calculatePrice = function () {
    var items = this.getItems();
    return items.reduce(function (totalPrice, item) {return totalPrice + item.calculatePrice()}, 0);
};
Order.prototype.calculateCalories = function () {
    var items = this.getItems();
    return items.reduce(function (total, item) {return total + item.calculateCalories()}, 0);
};
Order.prototype.addItem = function (newItems) {
    var statusOfPayment = this.getStatusOfPayment();
    if (!statusOfPayment) {
        var items = [...this.getItems()];
        this.items = items.concat(newItems);
    }
};
Order.prototype.deleteItem = function (...items) {
    var statusOfPayment = this.getStatusOfPayment();
    var oldItems = [...this.getItems()];
    console.log(oldItems);
    if (!statusOfPayment || oldItems.length) {
        this.items = oldItems.filter(function (item) {return !items.includes(item)});
    }
};
Order.prototype.getItemsNames = function () {
    var items = this.getItems();
    return items.map(function(item) {return item.getName()});

}


// var cola = new Drink(Drink.NAME_COLA, 1);
// var salad = new Salad(Salad.NAME_CEZAR, 150);
// var ham = new Hamburger(Hamburger.STAFFING_SALAD, Hamburger.SIZE_SMALL, 1);
// var order1 = new Order(cola, ham);
// var coffee = new Drink(Drink.NAME_COFFEE, 1)
// order1.addItem(salad);
// console.log(order1.calculatePrice());
// order1.deleteItem(salad);
// console.log(order1.calculatePrice());
// order1.addItem(salad);
//
// order1.addItem(coffee);
// console.log(order1.getItems());
// console.log(order1.getItemsNames());
// order1.deleteItem(coffee, salad);
// console.log(order1.getItemsNames());
// console.log(cola.getName());






