function Order(...dishes) {
    this.params = {
        dishes: dishes,
        paid: false
    }
}

Order.prototype.calculatePrice = function () {
    if (this.params.dishes.map(dish => dish.calculatePrice()).length !== 0) {return this.params.dishes
        .map(dish => dish.calculatePrice())
        .reduce((totalPrice, addPrice) => totalPrice + addPrice)} else {
    return 0

}} 
Order.prototype.getOptions = function () {
    let result = this.params.dishes
        .map(dish => dish.getOption())
     return result;
}
Order.prototype.calculateCalories = function () {
  if (this.params.dishes.map(dish => dish.calculateCalories()).length !== 0) {return this.params.dishes
        .map(dish => dish.calculateCalories())
        .reduce((totalCalories, addCalorie) => totalCalories + addCalorie)}  else {
  		return 0
  }
  

} 

Order.prototype.addDish = function(dish) {
if (this.params.paid === true) {return ("ORDER IS SERVED")} else {
return this.params.dishes.push(dish);
}
}

Order.prototype.removeDish = function(dish) {
if (this.params.paid === true) { return ("ORDER IS SERVED")} else {
let listOfDishes = this.params.dishes;
if (listOfDishes.indexOf(dish) !== -1) {
				return listOfDishes.splice(listOfDishes.indexOf(dish),1)
}
}
}

Order.prototype.payForOrder = function() {
	if(this.params.paid === false) {
  		this.params.paid = true;
    	Object.freeze(this.params.dishes);
  } 
  	
  
}

module.exports = {
    Order: Order
  };