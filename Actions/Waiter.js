"use strict";

function Waiter(name) {
  this.name = name;
}

var fullOrder = [];
var isPaid = false;

Waiter.prototype.deletePosition = function (positionName) {
  if (isPaid === true) {
    console.error(
      "Ваш заказ уже оплачен, " +
        this.name +
        " огорчен, но помочь не сможет. Позиция не удалена"
    );
  } else {
    var regexpPos = new RegExp(positionName, "gi");
    var isDeleted = false;
    fullOrder.forEach(function (item, index) {
      if (regexpPos.test(item.inputValueMain) && isDeleted === false) {
        fullOrder.splice(index, 1);
        isDeleted = true;
      }
    });
    isDeleted
      ? console.info(
          "Теперь " +
            this.name +
            " не принесет Вам " +
            positionName +
            ". Позиция успешно удалена"
        )
      : console.error(
          positionName +
            " в заказе отсутсвует, " +
            this.name +
            " ее не принес бы"
        );
  }
};

Waiter.prototype.showFullOrder = function () {
  console.info("Ваш заказ:");
  fullOrder.forEach(function (item) {
    return console.info(
      item.inputValueMain + " (" + item.inputValueOptions + ")"
    );
  });
  return fullOrder;
};

Waiter.prototype.showFullCallories = function () {
  var fullCal = fullOrder.reduce(function (sum, item) {
    return (sum += item[0].calories);
  }, 0);
  console.info("Общая калорийность: " + fullCal);
  return fullCal;
};

Waiter.prototype.showFullPrice = function () {
  var fullCost = fullOrder.reduce(function (sum, item) {
    return (sum += item[0].price);
  }, 0);
  console.info("Общая стоимость: " + fullCost);
  return fullCost;
};

Waiter.prototype.payment = function () {
  isPaid = true;
  console.info(
    "Ваш заказ оплачен, " + this.name + " больше не сможет его изменить"
  );
};

var raul = new Waiter("Рауль");
