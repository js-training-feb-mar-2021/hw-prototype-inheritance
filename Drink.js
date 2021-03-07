/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param type       Тип
*
*/
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

module.exports = {
    Drink: Drink
  };