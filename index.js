"use strict";

var Hamburger=require("./Hamburger.js");
var Drink=require("./Drink.js");
var Salad=require("./Salad.js");
var Order=require("./Order.js");

var HAMBURGER_SIZE_SMALL="small";
var HAMBURGER_SIZE_LARGE="large";

var HAMBURGER_STUFFING_CHEESE="cheese";
var HAMBURGER_STUFFING_SALAD="salad";
var HAMBURGER_STUFFING_POTATO="potato";

var SALAD_TYPE_CAESAR="caesar";
var SALAD_TYPE_OLIVIE="olivie";

var DRINK_TYPE_COLA="cola";
var DRINK_TYPE_COFFEE="coffee";

var hamburgerLargePotato=new Hamburger(HAMBURGER_SIZE_LARGE,HAMBURGER_STUFFING_POTATO);
var hamburgerSmallSalad=new Hamburger(HAMBURGER_SIZE_SMALL,HAMBURGER_STUFFING_SALAD);
var hamburgerSmallCheese=new Hamburger(HAMBURGER_SIZE_SMALL,HAMBURGER_STUFFING_CHEESE);
var saladOlivie=new Salad(SALAD_TYPE_OLIVIE);
var drinkCola=new Drink(DRINK_TYPE_COLA);
var saladCaesar=new Salad(SALAD_TYPE_CAESAR);
var drinkCoffee=new Drink(DRINK_TYPE_COFFEE);
var firstOrder=new Order(hamburgerLargePotato,hamburgerSmallSalad,saladOlivie,drinkCola);

console.log("Price: ", firstOrder.calculatePrice(),"Callories:", firstOrder.calculateCalories());
firstOrder.addDish(saladCaesar);
firstOrder.deleteDish();
firstOrder.addDish(drinkCoffee);
firstOrder.addDish(hamburgerSmallCheese);
firstOrder.deleteDish();
console.log("Price: ", firstOrder.calculatePrice(),"Callories:", firstOrder.calculateCalories());
firstOrder.pay();
firstOrder.addDish(drinkCoffee);
firstOrder.addDish(hamburgerSmallCheese);
console.log("Price: ", firstOrder.calculatePrice(),"Callories:", firstOrder.calculateCalories());