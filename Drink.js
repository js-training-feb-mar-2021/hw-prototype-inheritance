"use strict";

var Meal=require("./Meal.js");
/**
 * Класс напитка
 * @param {*} drinkType 
 */
function Drink(drinkType){
	var type={
		"cola":{"price":50,"callories":40},
		"coffee":{"price":80,"callories":20}
	};
	Meal.call(this, type[drinkType].price,type[drinkType].callories);
	this.stuffing=drinkType;
}
Drink.prototype.getStuffing=function(){
	return this.stuffing;
};
Drink.prototype.setStuffing=function(stuffing){
	this.stuffing=stuffing;
};
Drink.prototype = Object.create(Meal.prototype);
Drink.prototype.constructor = Drink;
Object.freeze(Drink);
module.exports=Drink;