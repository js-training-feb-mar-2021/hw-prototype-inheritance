function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.price = size.price + stuffing.price;
    this.energy = size.energy + stuffing.energy;
};

Hamburger.SIZE_SMALL = { price: 50, energy: 20 };
Hamburger.SIZE_LARGE = { price: 100, energy: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, energy: 20 };
Hamburger.STUFFING_SALAD = { price: 50, energy: 20 };
Hamburger.STUFFING_POTATO = { price: 50, energy: 20 };

var item1 = new Hamburger(Hamburger.STUFFING_CHEESE, Hamburger.SIZE_LARGE);

Hamburger.prototype.getSize = function () { return this.size };
Hamburger.prototype.getStuffing = function () { return this.stuffing };
Hamburger.prototype.calculatePrice = function (){ return this.price };
Hamburger.prototype.calculateCalories = function () { return this.energy };

function Salad(saladType, amount) {
    this.saladType = saladType;
    this.amount = Math.round(amount / 50) * 50;
    this.price = saladType.price * (Math.round(amount / 50) * 50) / 100;
    this.energy = saladType.energy * (Math.round(amount / 50) * 50) / 100;
};

Salad.CAESAR = { price: 100, energy: 20 };
Salad.OLIVIE = { price: 50, energy: 80 };

Salad.prototype.getSaladType = function () { return this.saladType };
Salad.prototype.getAmount = function () { return this.amount };
Salad.prototype.calculatePrice = function (){ return this.price };
Salad.prototype.calculateCalories = function () { return this.energy };

var item2 = new Salad(Salad.OLIVIE, 218);

function Drink(drinkType) {
    this.drinkType = drinkType;
    this.price = drinkType.price;
    this.energy = drinkType.energy;
}

Drink.COLA = { price: 50, energy: 40};
Drink.COFE = { price: 80, energy: 20 };

Drink.prototype.calculatePrice = function () { return this.price };
Drink.prototype.calculateCalories = function () { return this.energy };

var item3 = new Drink(Drink.COLA);

function Order() {
    var totalPrice = 0;
    var totalEnergy = 0;
    for ( var i = 0; i < arguments.length; i++) {
        totalPrice =  totalPrice + arguments[i].calculatePrice();
        totalEnergy = totalEnergy + arguments[i].calculateCalories();         
    };
    this.totalPrice = totalPrice;
    this.totalEnergy = totalEnergy;
}


var test1 = new Order(item1);
var test2 = new Order(item1, item2);
var test3 = new Order(item1, item2, item3);
var test10cofe = new Order(item3, item3, item3, item3, item3, item3, item3, item3, item3, item3,);