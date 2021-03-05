"use strict";

function Salad(type, amount) {
  this.type = type;
  this.amount = amount;
  this.positionInfo = [];

  if (type === undefined) {
    console.error("Введите название салата");
  }

  if (amount === undefined || amount <= 0) {
    console.error("Введите корректное количество салата");
  }

  if (isPaid === true) {
    console.error("Ваш заказ уже оплачен. Позиция не добавлена");
  } else if (amount > 0) {
    this.handleData();
  }
}
/* Виды салата */

Salad.TYPE_CESAR = Object.defineProperties(
  {},
  {
    type: {
      value: "salad",
      enumerable: true,
    },
    title: {
      value: "cesar",
      enumerable: true,
    },
    calories: {
      value: 20,
      enumerable: true,
    },
    price: {
      value: 100,
      enumerable: true,
    },
  }
);
Salad.TYPE_OLIVIE = Object.defineProperties(
  {},
  {
    type: {
      value: "salad",
      enumerable: true,
    },
    title: {
      value: "olivie",
      enumerable: true,
    },
    calories: {
      value: 80,
      enumerable: true,
    },
    price: {
      value: 50,
      enumerable: true,
    },
  }
);
/*
Данные конкретного салата
*/

Salad.prototype.handleData = function () {
  if (/цезарь/gi.test(this.type)) {
    this.positionInfo.inputValueMain = this.type;
    this.positionInfo.inputValueOptions = this.amount + "гр";
    this.positionInfo.push(Salad.TYPE_CESAR);
  }

  if (/оливье/gi.test(this.type)) {
    this.positionInfo.inputValueMain = this.type;
    this.positionInfo.inputValueOptions = this.amount;
    this.positionInfo.push(Salad.TYPE_OLIVIE);
  }

  if (this.positionInfo.length === 0) {
    console.error("В кафе нет салата " + this.type);
  } else {
    fullOrder.push(this.positionInfo); //добавляем сформированную позицию в заказ
    console.info(
      "Вы успешно добавили в заказ салат " +
        this.type +
        " в количестве " +
        this.amount +
        "гр"
    );
  }
};
/**
 * Узнать вид салата
 */

Salad.prototype.getType = function () {
  return this.type;
};
/**
 * Узнать вес салата
 */

Salad.prototype.getAmount = function () {
  return this.amount;
};
/**
 * Узнать цену салата
 * @return {Number} Цена в тугриках
 */

Salad.prototype.calculatePrice = function () {
  if (this.positionInfo.length === 0 || undefined) {
    this.pushData();
  }

  var costOfHundred = this.positionInfo.reduce(function (sum, item) {
    return (sum += item.price);
  }, 0);
  return (costOfHundred * this.amount) / 100;
};
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */

Salad.prototype.calculateCalories = function () {
  if (this.positionInfo.length === 0) {
    this.pushData();
  }

  var calOfHundred = this.positionInfo.reduce(function (sum, index) {
    return (sum += index.calories);
  }, 0);
  return (calOfHundred * this.amount) / 100;
};
