 var MENU = {
    drinks: {
       cola: {
          calories: 40,
          price: 50,
       },
       coffee: {
          calories: 20,
          price: 80,
       },
    },
    salad: {
       caesar: {
          calories: 20,
          price: 17,
       },
       oliver: {
          calories: 80,
          price: 50,
       },
    },

    burger: {
       hamburger_Small: {
          calories: 20,
          price: 50,
       },
       hamburger_Large: {
          calories: 40,
          price: 100,
       }
    }
 }

 var STUFFS = {
    STUFFING_CHEESE: {
       calories: 20,
       price: 10,
       description: `stuffing cheese`,
    },
    STUFFING_POTATO: {
       calories: 10,
       price: 15,
       description: `stuffing potato`,
    },
    STUFFING_SALAD: {
       calories: 20,
       price: 2,
       description: `stuffing salad`,
    },
 }

 function Hamburger(product, stuffing) {
    this.product = product;
    this.stuffing = stuffing;
 }

 Hamburger.prototype.getSize = function () {
    switch (this.product) {
       case MENU.hamburger_Small: {
          return console.log(`small hamburger`);
       }
       case MENU.hamburger_Large: {
          return console.log(`large hamburger`);
       }
    }
 }

 Hamburger.prototype.getStuffing = function () {
    return STUFFS[this.stuffing].description;
 }

 Hamburger.prototype.getPrice = function () {
    return MENU.burger[this.product].price + STUFFS[this.stuffing].price;
 }

 Hamburger.prototype.calculateCalories = function () {
    return MENU.burger[this.product].calories + STUFFS[this.stuffing].calories;
 };

 function Salad(product, amount) {
    this.product = product,
       this.amount = amount;
 }

 Salad.prototype.getPrice = function () {
    return (MENU.salad[this.product].price / 100) * this.amount;
 };

 Salad.prototype.calculateCalories = function () {
    return (MENU.salad[this.product].calories / 100) * this.amount;
 };

 function Drink(product, amount) {
    this.product = product
    this.amount = amount
 }

 Drink.prototype.calculateCalories = function () {
    return MENU.drinks[this.product].calories;
 };

 Drink.prototype.getPrice = function () {
    return (MENU.drinks[this.product].price / 100) * this.amount;
 };

 function Order(foods) {
    this.orderArray = foods;
    this.isPaid = false;
    this.order = foods;
 }

 Order.prototype.getPrice = function () {
    this.wholePrice = 0;
    for (const key in this.orderArray) {
       this.wholePrice += this.orderArray[key].getPrice();
    }
    return this.wholePrice;
 }

 Order.prototype.getPaid = function () {
    this.isPaid = true;
 }

 Order.prototype.removeProduct = function (product) {
    if (this.isPaid) {
       return `can't change your order you've paid already`;
    }
    var index = this.orderArray.indexOf(product);
    this.orderArray.splice(index, 1);
 }

 var cola = new Drink('cola', 200);
 var coffee = new Drink(`coffee`, 200);
 var caesar = new Salad(`caesar`, 200);
 var hamburger1 = new Hamburger(`hamburger_Small`, 'STUFFING_CHEESE');
 var hamburger2 = new Hamburger(`hamburger_Large`, 'STUFFING_POTATO');
 var order1 = new Order([hamburger1, hamburger2, caesar, coffee]);

 console.log(order1.getPrice());
 order1.removeProduct(hamburger1);
 console.log(order1.getPrice());
 console.log(order1.getPaid());
 console.log(order1.removeProduct(hamburger1));
