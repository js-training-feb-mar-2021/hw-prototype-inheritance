var order = function() {
    var orderList = [];

    function Order() {

    }
    
    Order.prototype.getOrderList = function() {
        return orderList;
    };

    Order.prototype.setOrderItem = function(item) {
        orderList.push(item);
    };

    Order.prototype.removeOrderItem = function(id) {
        orderList = orderList.filter(function (orderItem) {
            return Number(orderItem.getId()) !== Number(id);
        });
    };

    Order.prototype.resetOrder = function() {
        orderList = [];
    };

    return new Order();
};
