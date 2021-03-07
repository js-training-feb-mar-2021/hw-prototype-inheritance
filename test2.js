function Salad(type, weight) { 
    
    this.params = {
        type: type,
        weight: weight
    }
    
 }

 Salad.OLIVIE = {option: "Olivie", pricePerWeight: 50, caloriesPerWeight: 80};
 Salad.CEASER = {option: "Ceaser", pricePerWeight: 100, caloriesPerWeight: 20};
 
 Salad.prototype.getWeight = function() {
     return this.params.weight
 }

 Salad.prototype.getOption = function() {
     return this.params.type.option;
 }

 Salad.prototype.calculatePrice = function () {
    if (this.params.weight < 100) 
        {return "100 GRAMMS IS MINIMUM"} 
    else 
        { return this.params.type.pricePerWeight * (this.params.weight/100)}

}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Salad.prototype.calculateCalories = function (){
    if (this.params.weight < 100) 
        {return "100 GRAMMS IS MINIMUM"} 
    else 
        { return this.params.type.caloriesPerWeight * (this.params.weight/100)}

} 

function Drink(type) { 
    this.params = {
        type: type,
    }
 }

 Drink.COFFEE = {option: "COFFEE", price: 80, calories: 20};
 Drink.COLA = {option: "COLA", price: 50, calories: 40};
 

 Drink.prototype.getOption = function() {
     return this.params.type.option;
 }

 Drink.prototype.calculatePrice = function () {
    return this.params.type.price
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Drink.prototype.calculateCalories = function (){
     return this.params.type.calories

} 

function Hamburger(size, stuffing) { 
    this.params = {
        size: size,
        stuffing: stuffing
    }
    
 } 

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {option: "SIZE_SMALL", price: 50, calories: 20}
Hamburger.SIZE_LARGE = {option: "SIZE_LARGE", price: 100, calories: 40}
Hamburger.STUFFING_CHEESE = {option: "STUFFING_CHEESE", price: 10, calories: 20}
Hamburger.STUFFING_SALAD = {option: "STUFFING_SALAD", price: 20, calories: 5}
Hamburger.STUFFING_POTATO = {option: "STUFFING_POTATO", price: 15, calories: 10}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this.params.size.option
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.params.stuffing.option
}

Hamburger.prototype.getOption = function() {
return [this.params.size.option, this.params.stuffing.option];

}
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    if (this.params.stuffing === undefined) {
     return this.params.size.price
   } 
   
   else {return this.params.stuffing.price + this.params.size.price}
   }

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
if (this.params.stuffing === undefined) {
 return this.params.size.calories
} 

else {return this.params.stuffing.calories + this.params.size.calories}
}

const ham = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
const sal = new Salad(Salad.CEASER, 150);
const dr = new Drink(Drink.COFFEE);
const ham2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);


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
    return "THE ORDER IS EMPTY"

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
            "THE ORDER IS EMPTY"
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


const order = new Order (ham, sal, dr);
order.addDish(ham2);


console.log(order.calculatePrice())
console.log(order.calculateCalories())
order.removeDish(sal);
console.log(order.calculatePrice())
console.log(order.calculateCalories())