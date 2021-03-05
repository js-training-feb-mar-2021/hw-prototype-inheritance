"use strict";

function Hamburger(size, stuffing) {
  this.size = size;
  this.stuffing = stuffing;
  this.positionInfo = [];

  if (size === undefined) {
    console.error("Укажите размер гамбургера");
  }

  if (stuffing === undefined) {
    console.error("В гамбургере должна быть хотя бы одна начинка");
  }

  if (isPaid === true) {
    console.error("Ваш заказ уже оплачен. Позиция не добавлена");
  } else {
    this.handleData();
  }
}
/* Размеры, виды начинок и добавок */

Hamburger.SIZE_SMALL = Object.defineProperties(
  {},
  {
    type: {
      value: "burger_size",
      enumerable: true,
    },
    title: {
      value: "small",
      enumerable: true,
    },
    calories: {
      value: 20,
      enumerable: true,
    },
    price: {
      value: 50,
      enumerable: true,
    },
  }
);
Hamburger.SIZE_LARGE = Object.defineProperties(
  {},
  {
    type: {
      value: "burger_size",
      enumerable: true,
    },
    title: {
      value: "large_burger",
      enumerable: true,
    },
    calories: {
      value: 40,
      enumerable: true,
    },
    price: {
      value: 100,
      enumerable: true,
    },
  }
);
Hamburger.STUFFING_CHEESE = Object.defineProperties(
  {},
  {
    type: {
      value: "burger_stuffing",
      enumerable: true,
    },
    title: {
      value: "cheese",
      enumerable: true,
    },
    calories: {
      value: 20,
      enumerable: true,
    },
    price: {
      value: 10,
      enumerable: true,
    },
  }
);
Hamburger.STUFFING_SALAD = Object.defineProperties(
  {},
  {
    type: {
      value: "burger_stuffing",
      enumerable: true,
    },
    title: {
      value: "salad",
      enumerable: true,
    },
    calories: {
      value: 5,
      enumerable: true,
    },
    price: {
      value: 20,
      enumerable: true,
    },
  }
);
Hamburger.STUFFING_POTATO = Object.defineProperties(
  {},
  {
    type: {
      value: "burger_stuffing",
      enumerable: true,
    },
    title: {
      value: "potato",
      enumerable: true,
    },
    calories: {
      value: 10,
      enumerable: true,
    },
    price: {
      value: 15,
      enumerable: true,
    },
  }
);
/*
Данные конкретного гамбургера
*/

Hamburger.prototype.handleData = function () {
  if (/маленький/gi.test(this.size)) {
    this.positionInfo.inputValueMain = this.size;
    this.positionInfo.inputValueOptions = this.stuffing;
    this.positionInfo.push(Hamburger.SIZE_SMALL);
  }

  if (/большой/gi.test(this.size)) {
    this.positionInfo.inputValueMain = this.size;
    this.positionInfo.inputValueOptions = this.stuffing;
    this.positionInfo.push(Hamburger.SIZE_LARGE);
  }

  if (this.positionInfo.length === 0) {
    console.error("В кафе нет " + this.size + " гамбургера");
  }

  var stuffingArr = this.stuffing.split(", ");
  var isCorrectData = true;

  for (var i = 0; i < stuffingArr.length && isCorrectData === true; i++) {
    isCorrectData = false;

    if (/сыр/gi.test(stuffingArr[i])) {
      this.positionInfo.push(Hamburger.STUFFING_CHEESE);
      isCorrectData = true;
    }

    if (/салат/gi.test(stuffingArr[i])) {
      this.positionInfo.push(Hamburger.STUFFING_SALAD);
      isCorrectData = true;
    }

    if (/картофел/gi.test(stuffingArr[i])) {
      this.positionInfo.push(Hamburger.STUFFING_POTATO);
      isCorrectData = true;
    }

    if (isCorrectData === false) {
      console.error("В кафе нет гамбургера с " + stuffingArr[i]);
    }
  }

  if (isCorrectData === true) {
    fullOrder.push(this.positionInfo); //добавляем сформированную позицию в заказ

    console.info(
      "Вы успешно добавили в заказ " + this.size + " c " + this.stuffing
    );
  }
};
/**
 * Узнать размер гамбургера
 */

Hamburger.prototype.getSize = function () {
  return this.size;
};
/**
 * Узнать начинку гамбургера
 */

Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
};
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */

Hamburger.prototype.calculatePrice = function () {
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

Hamburger.prototype.calculateCalories = function () {
  if (this.positionInfo.length === 0) {
    this.pushData();
  }

  return this.positionInfo.reduce(function (sum, item) {
    return (sum += item.calories);
  }, 0);
};
