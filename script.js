'use strict';

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
function Hamburger(size, stuffing) {
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { tugriks: 50, calories: 20 };
Hamburger.SIZE_LARGE = { tugriks: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { tugriks: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { tugriks: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { tugriks: 15, calories: 10 };

Salad.CAESAR = { tugriks: 100, calories: 20, per: 100 };
Salad.OLIVIE = { tugriks: 100, calories: 20, per: 100 };

Drink.COLA = { tugriks: 50, calories: 40 };
Drink.COFE = { tugriks: 80, calories: 20 };


function Hamburger(size) {
    this._size = size
    this._params = [].slice.call(arguments)
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
   return this._size
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this._params.slice(1)
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let price = 0
    this._params.forEach(function (item){
        price = price + item.tugriks
    })
    return this._price = price
};


/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */

Hamburger.prototype.calculateCalories = function () {
    let calories = 0
    this._params.forEach(function (item){
        calories = calories + item.calories
    })
    return this._calories = calories
}

//Salad

function Salad (size, weight) {
    Hamburger.call(this, size)
    this._weight = weight
}

Salad.prototype = Object.create(Hamburger.prototype);
Salad.prototype.constructor = Hamburger;

/**
 * Узнать цену салата
 * @return {Number} Цена в тугриках
 */

Salad.prototype.calculatePrice = function () {
    this._price = this._weight * this._size.per/100
    return this._price
}


// Drink
function Drink (size) {
    Hamburger.call(this, size)
}

Drink.prototype = Object.create(Hamburger.prototype);
Drink.prototype.constructor = Hamburger;


function Order() {
    this._positions = [].slice.call(arguments)
    this._isPayed = false
}

/**
 * Узнать стоимость заказа
 * @return {Number} Цена в тугриках
 */

Order.prototype.getTotalPrice = function () {
    this._totalPrice = 0
    this._positions.forEach((position) => {
        this._totalPrice = this._totalPrice + position.calculatePrice()
    })
    return this._totalPrice
}

/**
 * Узнать калорийность заказа
 * @return {Number} Калорийность в калориях
 */
Order.prototype.getTotalCalories = function () {
    this._totalCalories = 0
    this._positions.forEach((position) => {
        this._totalCalories = this._totalCalories + position.calculateCalories()
    })
    return this._totalCalories
}

Order.prototype.addPosition = function (position) {
    if(!this._isPayed) {
        this._positions.push(position)
    } else {
        console.log('Невозможно добавить позицию, заказ уже оплачен')
    }
    return this._positions
}

Order.prototype.removePosition = function (position) {
    if(!this._isPayed) {
        var ind = this._positions.indexOf(position)
        this._positions.splice(ind, 1)
    } else {
        console.log('Невозможно добавить позицию, заказ уже оплачен')
    }
    return this._positions
}

Order.prototype.setPay = function (value) {
    return this._isPayed = value
}

var cheesburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD)
console.log(cheesburger)
console.log(cheesburger.calculatePrice())
console.log('calories',cheesburger.calculateCalories())

var caesar = new Salad(Salad.CAESAR, 150)
console.log(caesar)
console.log(caesar.calculatePrice())
console.log('calories',caesar.calculateCalories())

var cola = new Drink(Drink.COLA)
console.log(cola)
console.log(cola.calculatePrice())
console.log('calories',cola.calculateCalories())

var cofe = new Drink(Drink.COFE)
console.log(cofe)
console.log(cofe.calculatePrice())
console.log('calories',cofe.calculateCalories())


var order = new Order(cheesburger, caesar, cola)
console.log('total price',order.getTotalPrice())
console.log('total calories',order.getTotalCalories())
console.log(order.setPay(true))
console.log('add coffe',order.addPosition(cofe))
console.log(order.removePosition(cheesburger))
console.log('total price',order.getTotalPrice())
console.log('total calories',order.getTotalCalories())

