var Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

var order = new Order();

order.addToOrder(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE));
order.addToOrder(new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO));
order.addToOrder(new Salad(Salad.TYPE_OLIVIE, 300));
order.addToOrder(new Drink(Drink.TYPE_COLA));

console.log(order.getDishes());

order.deletePositionFromOrder(4);
console.log(order.getDishes());

order.pay();

order.deletePositionFromOrder(1);

console.log('total price: ' + order.calculateTotalPrice());
console.log('total calories: ' + order.calculateTotalCalories());