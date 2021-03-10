function Order() {
  var args = Array.prototype.slice.call(arguments, 0);
  this.orderList = args;
  this.isPaid = false;
}

Order.prototype.totalPrice = function () {
  return this.orderList.reduce(function (sum, orderItem) {
    return sum + orderItem.calculatePrice();
  }, 0);
};

Order.prototype.totalCalories = function () {
  return this.orderList.reduce(function (sum, orderItem) {
    return sum + orderItem.calculateCalories();
  }, 0);
};

Order.prototype.pay = function () {
  this.isPaid = true;
};

Order.prototype.addOrderItem = function (orderItem) {
  if (!this.isPaid) {
    this.orderList.push(orderItem);
  }
};

Order.prototype.deleteOrderItem = function (orderItem) {
  if (!this.isPaid) {
    this.orderList = this.orderList.filter(function (item) {
      if (
        item.price === orderItem.price &&
        item.calories === orderItem.calories &&
        item.constructor === orderItem.constructor
      )
        return false;
      else return true;
    });
  }
};
var temp;
var order = new Order();