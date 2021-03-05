"use strict";

function Drink(type) {
  this.type = type;
  this.positionInfo = [];

  if (type === undefined) {
    console.error("Введите название напитка");
  }

  if (isPaid === true) {
    console.error("Ваш заказ уже оплачен. Позиция не добавлена");
  } else {
    this.handleData();
  }
}
/* Виды напитков */

Drink.TYPE_COLA = Object.defineProperties(
  {},
  {
    type: {
      value: "drink",
      enumerable: true,
    },
    title: {
      value: "cola",
      enumerable: true,
    },
    calories: {
      value: 40,
      enumerable: true,
    },
    price: {
      value: 50,
      enumerable: true,
    },
  }
);
Drink.TYPE_COFFEE = Object.defineProperties(
  {},
  {
    type: {
      value: "drink",
      enumerable: true,
    },
    title: {
      value: "coffee",
      enumerable: true,
    },
    calories: {
      value: 20,
      enumerable: true,
    },
    price: {
      value: 80,
      enumerable: true,
    },
  }
);
/*
Данные конкретного напитка
*/

Drink.prototype.handleData = function () {
  if (/кола/gi.test(this.type)) {
    this.positionInfo.inputValueMain = this.type;
    this.positionInfo.inputValueOptions = "1шт";
    this.positionInfo.push(Drink.TYPE_COLA);
  }

  if (/кофе/gi.test(this.type)) {
    this.positionInfo.inputValueMain = this.type;
    this.positionInfo.inputValueOptions = "1шт";
    this.positionInfo.push(Drink.TYPE_COFFEE);
  }

  if (this.positionInfo.length === 0) {
    console.error("В кафе нет напитка " + this.type);
  } else {
    fullOrder.push(this.positionInfo); //добавляем сформированную позицию в заказ
    console.info("Вы успешно добавили в заказ напиток " + this.type);
  }
};
/**
 * Узнать вид напитка
 */

Drink.prototype.getType = function () {
  return this.type;
};

/**
 * Узнать цену напитка
 * @return {Number} Цена в тугриках
 */

Drink.prototype.calculatePrice = function () {
  if (this.positionInfo.length === 0 || undefined) {
    this.pushData();
  }

  return this.positionInfo.reduce(function (sum, item) {
    return (sum += item.price);
  }, 0);
};
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */

Drink.prototype.calculateCalories = function () {
  if (this.positionInfo.length === 0) {
    this.pushData();
  }

  return this.positionInfo.reduce(function (sum, index) {
    return (sum += index.calories);
  }, 0);
};
