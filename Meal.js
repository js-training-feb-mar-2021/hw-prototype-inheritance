"use strict";

/**
 * Базовый класс для всех позиция в меню
 * @param {*} price 
 * @param {*} calloriesCap 
 */
function Meal(price,calloriesCap){
	this.price=price;
	this.calloriesCap=calloriesCap;
}
Meal.prototype.getPrice=function(){
	return this.price;
};
Meal.prototype.setPrice=function(price){
	this.price=price;
};
Meal.prototype.getCalloriesCap=function(){
	return this.calloriesCap;
};
Meal.prototype.setCalloriesCap=function(calloriesCap){
	this.calloriesCap=calloriesCap;
};
Object.freeze(Meal);

module.exports=Meal;