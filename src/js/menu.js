function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.price = size.price + stuffing.price;
    this.energy = size.energy + stuffing.energy;
};

Hamburger.SIZE_SMALL = { price: 50, energy: 20 };
Hamburger.SIZE_LARGE = { price: 100, energy: 40 };
Hamburger.STUFFING_SALAD = { price: 50, energy: 20 };
Hamburger.STUFFING_CHEESE = { price: 10, energy: 20 };
Hamburger.STUFFING_POTATO = { price: 50, energy: 20 };

Hamburger.prototype.getSize = function () { return this.size };
Hamburger.prototype.getStuffing = function () { return this.stuffing };
Hamburger.prototype.calculatePrice = function (){ return this.price };
Hamburger.prototype.calculateCalories = function () { return this.energy };

function Salad(saladType, amount) {
    this.saladType = saladType;
    this.amount = Math.round(Number(amount) / 50) * 50;
    this.price = saladType.price * (Math.round(amount / 50) * 50) / 100;
    this.energy = saladType.energy * (Math.round(amount / 50) * 50) / 100;
};

Salad.CAESAR = { price: 100, energy: 20 };
Salad.OLIVIE = { price: 50, energy: 80 };

Salad.prototype.getSaladType = function () { return this.saladType };
Salad.prototype.getAmount = function () { return this.amount };
Salad.prototype.calculatePrice = function (){ return this.price };
Salad.prototype.calculateCalories = function () { return this.energy };

function Drink(drinkType) {
    this.drinkType = drinkType;
    this.price = drinkType.price;
    this.energy = drinkType.energy;
}

Drink.COLA = { price: 50, energy: 40};
Drink.COFE = { price: 80, energy: 20 };

Drink.prototype.calculatePrice = function () { return this.price };
Drink.prototype.calculateCalories = function () { return this.energy };