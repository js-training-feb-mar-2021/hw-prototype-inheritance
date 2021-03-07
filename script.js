function Item(type) {
    this.name = type.name;
    this.price = type.price;
    this.calories = type.calories;

    this.getName = function() {
        return type.name;
    }

}

function Drink(type) {
    Item.call(this, type);
}

Drink.COKE = {
    name: 'coke',
    price: 50,
    calories: 40,
    writable: false,
    configurable: false
};

Drink.COFFEE = {
    name: 'coffee',
    price: 50,
    calories: 40,
    writable: false,
    configurable: false
};

function Salad(type, weight) {
    Item.call(this, type);
    this.price = type.price / 100 * weight;
    this.calories = type.calories / 100 * weight;
}

Salad.CAESAR = {
    name: 'caesar',
    price: 100,
    calories: 20,
    writable: false,
    configurable: false
}

Salad.OLIVIE = {
    name: 'olivie',
    price: 50,
    calories: 80,
    writable: false,
    configurable: false
}

function Hamburger(size, stuffing) {
    Item.call(this, size, stuffing);
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
    this.size = size.size;
    this.stuffing = stuffing.stuffing;
}

Hamburger.SIZE_SMALL = {
    name: 'hamburger',
    size: "small",
    price: 50,
    calories: 20,
    writable: false,
    configurable: false
};

Hamburger.SIZE_LARGE = {
    name: 'hamburger',
    size: "large",
    price: 100,
    calories: 40,
    writable: false,
    configurable: false,
};

Hamburger.STUFFING_CHEESE = {
    stuffing: "cheese",
    price: 10,
    calories: 20,
    writable: false,
    configurable: false,
}

Hamburger.STUFFING_SALAD = {
    stuffing: "salad",
    price: 20,
    calories: 5,
    writable: false,
    configurable: false,
}

Hamburger.STUFFING_POTATO = {
    stuffing: "potato",
    price: 15,
    calories: 10,
    writable: false,
    configurable: false,
}

Hamburger.prototype.getSize = function() {
    return this.size;
}

Hamburger.prototype.getStuffing = function() {
    return this.stuffing;
}

Hamburger.prototype.getPrice = function() {
    return this.price;
}

Hamburger.prototype.getCalories = function() {
    return this.calories;
}

function Order(...args) {
    this.payment = false;
    this.list = args;

    this.totalPrice = function() {
        var sum = 0;
        var key = "price";
        for (let prop of this.list) {
            sum += prop[key];
        }
        return sum + " tugrikov";
    }

    this.totalCalories = function() {
        var sum = 0;
        var key = "calories";
        for (let prop of this.list) {
            sum += prop[key];
        }
        return sum + " calories";
    }

}

Order.prototype.isPaid = function() {
    if (this.payment == true) {
        Object.freeze(this)
    }
}


// var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE)
// var caesar = new Salad(Salad.CAESAR, 150);
// var drink = new Drink(Drink.COFFEE);

// var order = new Order (hamburger, caesar, drink);

// console.log(order)