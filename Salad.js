/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param type      Тип
* @param weight    Вес
*/
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

module.exports = {
    Salad: Salad
  };