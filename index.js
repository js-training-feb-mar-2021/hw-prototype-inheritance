//Hamburger part
function Hamburger(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
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

// console.log(hamburger1.getSize());
// console.log(hamburger1.getStuffing());
// console.log(hamburger1.calculatePrice());
// console.log(hamburger1.calculateCalories());

//Salad part

function Salad (type, weight) {
    this._type = type;
    this._weight = weight;
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


// console.log(caesar.getType());
// console.log(caesar.getWeight());
// console.log(caesar.calculatePrice());
// console.log(caesar.calculateCalories());

//Drinks part

function Drink(type) {
    this._type = type;
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

// console.log(drink1.getType());
// console.log(drink1.calculateCalories());
// console.log(drink1.calculatePrice());