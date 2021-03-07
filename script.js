 Salad.CAESAR = {
    price: 100,
    calories: 20,
    description: "Salad, chicken, souse, garlic, rackers",
 };
 Salad.OLIVER = {
    price: 50,
    calories: 80,
    description: "mayonnaise, chicken, potato, peas",
 };
 Drink.COLA = {
    price: 50,
    calories: 40,
    description: "cola",
 };
 Drink.COFFEE = {
    price: 80,
    calories: 20,
    description: "coffee, milk, sugar"
 };
 Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
    description: "small hamburger"
 };
 Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
    description: "large hamburger"
 };
 Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20,
    description: "cheese"
 };
 Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5,
    description: "salad"
 };
 Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10,
    description: "potato"
 };


 function MenuProduct(product, amount) {
    this.product = product,
       this.amount = amount;
 }

 MenuProduct.prototype.getPrice = function () {
    return (this.product.price / 100) * this.amount;
 }

 MenuProduct.prototype.getCalories = function () {
    return (this.product.calories / 100) * this.amount;
 }

 MenuProduct.prototype.getStuffing = function () {
    return this.product.description;
 }

 function Hamburger(product, stuffing) {
    this.product = product;
    this.stuffing = stuffing;
 }

 Hamburger.prototype.getSize = function () {
    return this.product.description;
 }

 Hamburger.prototype.getStuffing = function () {
    return this.stuffing.description;
 }

 Hamburger.prototype.getPrice = function () {
    return this.product.price + this.stuffing.price;
 }

 Hamburger.prototype.getCalories = function () {
    return this.product.calories + this.stuffing.calories;
 };

 function Salad(product, amount) {
    this.product = product,
       this.amount = amount;
 }

 Salad.prototype = Object.create(MenuProduct.prototype);

 function Drink(product, amount) {
    this.product = product
    this.amount = amount
 }

 Drink.prototype = Object.create(MenuProduct.prototype);

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

 Order.prototype.getTotalCalories = function () {
   this.totalCalories = 0;
   for (const key in this.orderArray) {
      this.totalCalories += this.orderArray[key].getCalories();
   }
   return this.totalCalories;
}

 Order.prototype.getPaid = function () {
    this.isPaid = true;
 }

 Order.prototype.addProduct = function (product) {
    if (this.isPaid) {
       return `sorry you can't change your order you've paid already`;
    }
    this.orderArray.push(product);
 }

 Order.prototype.removeProduct = function (product) {
    if (this.isPaid) {
       return `sorry you can't change your order you've paid already`;
    }
    var index = this.orderArray.indexOf(product);
    this.orderArray.splice(index, 1);
 }

 var cola = new Drink(Drink.COLA, 280);
 var coffee = new Drink(Drink.COFFEE, 200);
 var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
 var hamburger2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
 var caesar = new Salad(Salad.CAESAR, 250);
 var oliver = new Salad(Salad.OLIVER, 200);
 var order1 = new Order([hamburger1, hamburger2, caesar, coffee, oliver]);
 var order2 = new Order([hamburger1, oliver]);

 console.log(order2.getTotalCalories());


