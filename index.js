//Hamburger part
function Hamburger(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._name = this._size.name + " hamburger with " + this._stuffing.name;
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
    name: 'small',
}
Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
    name: 'big',
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20,
    name: 'cheese',
}
Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5,
    name: 'salad',
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10,
    name: 'potato',
}
Hamburger.prototype.getSize = function() {
    return this._size.name;
}
Hamburger.prototype.getStuffing = function() {
    return this._stuffing.name;
}

Hamburger.prototype.calculatePrice = function() {
    return this._size.price + this._stuffing.price;
}

Hamburger.prototype.calculateCalories = function() {
    return this._size.calories + this._stuffing.calories;
}

var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

//Salads part

function Salad (type, weight) {
    this._type = type;
    this._weight = weight;
    this._name = this._weight + " gram of " + this._type.name;
}

//Salads' price and calories are for each 100gram
Salad.TYPE_CAESAR = {
    price: 100,
    calories: 20,
    name: 'Сaesar',
}

Salad.TYPE_OLIVIER = {
    price: 50,
    calories: 80,
    name: 'Olivier',
}

Salad.prototype.getType = function() {
    return this._type.name;
}

Salad.prototype.getWeight = function() {
    return this._weight;
}

Salad.prototype.calculatePrice = function() {
    return this._type.price * this._weight / 100;
}

Salad.prototype.calculateCalories = function() {
    return this._type.calories * this._weight / 100;
}

var caesar = new Salad(Salad.TYPE_CAESAR, 150);

//Drinks part

function Drink(type) {
    this._type = type;
    this._name = this._type.name;
}

Drink.TYPE_COLA = {
    price: 50,
    calories: 40,
    name: 'Cola',
}

Drink.TYPE_COFFEE = {
    price: 80,
    calories: 20,
    name: 'Coffee',
}

Drink.prototype.getType = function() {
    return this._type.name;
}

Drink.prototype.calculatePrice = function() {
    return this._type.price;
}

Drink.prototype.calculateCalories = function() {
    return this._type.calories;
}

var drink1 = new Drink(Drink.TYPE_COLA);

//Order part
function Order() {
    this._order = [];
    this._comfirmed = false;

    for (var i = 0; i < arguments.length; i++) {
        this._order.push(arguments[i]);
    }
}

Order.prototype.showOrder = function() {
    if(this._order.length < 1) {
        console.log('Your order is empty');
    } else {
        // if console is needed
        console.log("your order is:");
        for (var i = 0; i < this._order.length; i++) {
            console.log(this._order[i]._name + ": (price: " + this._order[i].calculatePrice() + ", calories: " +
                +this._order[i].calculateCalories() +")");
        }
        // if object is needed
        // return this._order;
    }
}

Order.prototype.addItem = function(item) {
    if(!this._comfirmed) {
        this._order.push(item);
        console.log(item._name + " was added to your order");
    } else {
        console.log("This order can't be changed");
    }
}

Order.prototype.removeItem = function(item) {
    var itemIndex = this._order.indexOf(item);
    if(this._comfirmed === true) {
        console.log("This order can't be changed");
    } else if(itemIndex === -1) {
        console.log("This order doesn't contain " + item._name);
    } else if(itemIndex > -1) {
        this._order.splice(itemIndex, 1);
        console.log(item._name + " was removed from your order");
    }
}

Order.prototype.confirmOrder = function() {
    this._comfirmed = true;
    console.log("The order is confirmed. You can't change it anymore");
}

Order.prototype.calculatePrice = function() {
    var totalPrice = 0;
    for (let i = 0; i < this._order.length; i++) {
        var itemPrice = this._order[i].calculatePrice();
        totalPrice += itemPrice;
    }
    return totalPrice;
}

Order.prototype.calculateCalories = function() {
    var totalCalories = 0;
    for (let i = 0; i < this._order.length; i++) {
        var itemCalories = this._order[i].calculateCalories();
        totalCalories += itemCalories;
    }
    return totalCalories;
}

var hamburger2 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);
var drink2 = new Drink(Drink.TYPE_COFFEE);
var olivier = new Salad(Salad.TYPE_OLIVIER, 200);

var order1 = new Order(hamburger1, caesar, drink1,);

order1.showOrder();
console.log(order1.calculatePrice());
console.log(order1.calculateCalories());
order1.removeItem(hamburger2);
order1.addItem(hamburger2);
order1.addItem(olivier);
order1.removeItem(hamburger1);
order1.showOrder();
console.log(order1.calculatePrice());
console.log(order1.calculateCalories());
order1.confirmOrder();
order1.addItem(drink2);