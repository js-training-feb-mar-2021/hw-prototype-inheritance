"use strict";

var Meal=require("./Meal.js");
/**
 * Класс гамбургера
 * @param {*} sizePar 
 * @param {*} stuffingPar 
 */
function Hamburger(sizePar, stuffingPar){
	var stuffing={
		"cheese":{"price":10,"callories":20},
		"salad":{"price":20,"callories":5},
		"potato":{"price":15,"callories":10}
	};
	var size={
		"small":{"price":50,"callories":20},
		"large":{"price":100,"callories":40}
	};
	Meal.call(this, stuffing[stuffingPar].price+size[sizePar].price,stuffing[stuffingPar].callories+size[sizePar].callories);
	this.stuffing=stuffingPar;
	this.size=sizePar;
}
Hamburger.prototype.getStuffing=function(){
	return this.stuffing;
};
Hamburger.prototype.setStuffing=function(stuffing){
	this.stuffing=stuffing;
};
Hamburger.prototype.getSize=function(){
	return this.size;
};
Hamburger.prototype.setSize=function(size){
	this.size=size;
};
Hamburger.prototype = Object.create(Meal.prototype);
Hamburger.prototype.constructor = Hamburger;
Object.freeze(Hamburger);
module.exports=Hamburger;