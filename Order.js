"use strict";

/**
 * Композиционный класс "заказ"
 * @param {*} dishes 
 */
function Order(){
	this.dishes=[];
	for(var i=0;i<arguments.length;i++){
		this.dishes.push(arguments[i]);
	}
	this.isFrozen=false;
}
Order.prototype.addDish=function(dish){
	if(!this.isFrozen){
		this.dishes.push(dish);
	}
};
Order.prototype.deleteDish=function(){
	if(!this.isFrozen){
		this.dishes.pop();
	}
};
Order.prototype.calculatePrice=function(){
	var price=0;
	for(var i=0;i<this.dishes.length;i++){
		price+=this.dishes[i].getPrice();
	}
	return price;
};
Order.prototype.calculateCalories=function(){
	var callories=0;
	for(var i=0;i<this.dishes.length;i++){
		callories+=this.dishes[i].getCalloriesCap();
	}
	return callories;
};
Order.prototype.pay=function(){
	this.isFrozen=true;
	return this.calculatePrice();
};
Object.freeze(Order);
module.exports=Order;