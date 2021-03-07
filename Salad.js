"use strict";

var Meal=require("./Meal.js");
/**
 * Класс салата
 * @param {*} saladType 
 */
function Salad(saladType){
	var type={
		"caesar":{"price":100,"callories":20},
		"olivie":{"price":50,"callories":80}
	};
	Meal.call(this, type[saladType].price,type[saladType].callories);
	this.stuffing=saladType;
}
Salad.prototype.getStuffing=function(){
	return this.stuffing;
};
Salad.prototype.setStuffing=function(stuffing){
	this.stuffing=stuffing;
};
Salad.prototype = Object.create(Meal.prototype);
Salad.prototype.constructor = Salad;
Object.freeze(Salad);
module.exports=Salad;