"use strict";function Hamburger(e,r){this.size=e,this.stuffing=r,this.price=e.price+r.price,this.energy=e.energy+r.energy}Hamburger.SIZE_SMALL={price:50,energy:20},Hamburger.SIZE_LARGE={price:100,energy:40},Hamburger.STUFFING_CHEESE={price:10,energy:20},Hamburger.STUFFING_SALAD={price:50,energy:20},Hamburger.STUFFING_POTATO={price:50,energy:20};var item1=new Hamburger(Hamburger.STUFFING_CHEESE,Hamburger.SIZE_LARGE);function Salad(e,r){this.saladType=e,this.amount=50*Math.round(r/50),this.price=e.price*(50*Math.round(r/50))/100,this.energy=e.energy*(50*Math.round(r/50))/100}Hamburger.prototype.getSize=function(){return this.size},Hamburger.prototype.getStuffing=function(){return this.stuffing},Hamburger.prototype.calculatePrice=function(){return this.price},Hamburger.prototype.calculateCalories=function(){return this.energy},Salad.CAESAR={price:100,energy:20},Salad.OLIVIE={price:50,energy:80},Salad.prototype.getSaladType=function(){return this.saladType},Salad.prototype.getAmount=function(){return this.amount},Salad.prototype.calculatePrice=function(){return this.price},Salad.prototype.calculateCalories=function(){return this.energy};var item2=new Salad(Salad.OLIVIE,218);function Drink(e){this.drinkType=e,this.price=e.price,this.energy=e.energy}Drink.COLA={price:50,energy:40},Drink.COFE={price:80,energy:20},Drink.prototype.calculatePrice=function(){return this.price},Drink.prototype.calculateCalories=function(){return this.energy};var item3=new Drink(Drink.COLA);function Order(){for(var e=0,r=0,t=0;t<arguments.length;t++)e+=arguments[t].calculatePrice(),r+=arguments[t].calculateCalories();this.totalPrice=e,this.totalEnergy=r}var test1=new Order(item1),test2=new Order(item1,item2),test3=new Order(item1,item2,item3),test10cofe=new Order(item3,item3,item3,item3,item3,item3,item3,item3,item3,item3);