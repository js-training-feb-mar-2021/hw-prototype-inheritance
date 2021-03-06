'use strict';

var order = function(payload) {
    var orderList = [];
    var payButton = null;
    var orderTotal = null;
    var orderCalories = null;
    var container = null;

    function Order(data) {
        payButton = data.payButton;
        container = document.querySelector(data.containerSelector);
        orderCalories = document.querySelector(data.orderCaloriesSelector);
        orderTotal = document.querySelector(data.orderTotalSelector);
    }

    /** Шаблон элементов заказа (простой вариант с онкликом) */
    function getOrderTemplate(data) {
        return data.map(function (item) {
            var id = item.getId();

            var ulElement = document.createElement('ul');
            ulElement.classList.add('order__item');

            var descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.getDescription();

            var priceElement = document.createElement('p');
            priceElement.textContent = 'Цена ' + String(item.calculatePrice());

            var caloriesElement = document.createElement('p');
            caloriesElement.textContent = 'Калории ' + String(item.calculateCalories());

            var buttonElement = document.createElement('button');
            buttonElement.textContent = 'Удалить';

            buttonElement.addEventListener('click', function () {
                Order.prototype.removeOrderItem(id);
            }, { once: true });

            ulElement.appendChild(descriptionElement);
            ulElement.appendChild(priceElement);
            ulElement.appendChild(caloriesElement);
            ulElement.appendChild(buttonElement);

            return ulElement;
        });
    }

    /** Сетим информацию об итоговой сумме заказа и общей сумме калорий */
    function setOrderTotalInfo(data) {
        if (!data.length) {
            orderTotal.textContent = '';
            orderCalories.textContent = '';
    
            return;
        }
    
        orderTotal.textContent = 'Стоимость заказа: ' + String(getTotalPrice(data));
        orderCalories.textContent = 'Всего калорий: ' + String(getTotalCalories(data));
    }

    /** Сетим шаблон заказа на страницу (простой вариант, когда все затирается и заново отрисовывается) */
    function setOrder(data) {
        container.innerHTML = '';
    
        getOrderTemplate(data).forEach(function (item) {
            container.insertAdjacentElement(
                'beforeend',
                item,
            );
        });
    
        setOrderTotalInfo(data);
    
        payButton.setPayButtonState(orderList);
    }

    /** Создаем объекты с данными по элементу заказа и вызываем обносление состояния заказа на странице */
    Order.prototype.createNewOrderItem = function (filteredBlockItems, blockItems) {
        Object.entries(filteredBlockItems).forEach(function (item) {
            var key = item[0];
            var value = item[1];
    
            switch (key) {
                case 'humburder':
                    var newHumburger = humburger(value, FoodConstructor());
                    Order.prototype.setOrderItem(newHumburger);
                    break;
                case 'salad':
                    var grams = Array.from(blockItems).find((item) => item.getAttribute('id') === 'grams');
                    var newSalad = salad({salad: value, grams: grams.value}, FoodConstructor());
                    Order.prototype.setOrderItem(newSalad);
                    break;
                case 'drink':
                    var newDrink = drink(value, FoodConstructor());
                    Order.prototype.setOrderItem(newDrink);
                    break;
                default:
                    break;
            }
        });
    
        setOrder(orderList);
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

        setOrder(orderList);
    
        payButton.setPayButtonState(orderList);
    };

    Order.prototype.resetOrder = function() {
        orderList = [];
    
        setOrder(orderList);
    
        payButton.setPayButtonState(orderList);
    };

    return new Order(payload);
};
