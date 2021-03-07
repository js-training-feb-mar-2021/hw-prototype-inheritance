/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
*/
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
Hamburger.STUFFING_SALAD = {option: "SSTUFFING_SALAD", price: 20, calories: 5}
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
    return [this.getSize(), this.getStuffing()];
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

module.exports = {
    Hamburger: Hamburger
  };

  const ham = new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
  console.log(ham);