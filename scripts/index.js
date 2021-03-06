var menuForm = document.querySelector('.form');
var orderList = document.querySelector('.order__list');
var orderTotal = document.querySelector('.order__total');
var orderCalories = document.querySelector('.order__calories');
var orderReset = document.querySelector('.order__reset');

/** Создаем заказ */
var newOrder = order();

/** Переключение чекбоксов и радиокнопок */
function setCheckboxState(ev) {
    var targetType = ev.target.getAttribute('type');

    if (targetType === 'checkbox') {
        changeChackboxState(ev.target);
    }

    if (targetType === 'radio') {
        changeRadioState(ev.target);
    }
}

/** Обнуление заказа */
function resetOrder() {
    newOrder.resetOrder();
    setOrder(newOrder.getOrderList());
}

/** Удаление одного элемента из заказа */ 
function removeItem(id) {
    newOrder.removeOrderItem(id);
    setOrder(newOrder.getOrderList());
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
    orderList.innerHTML = '';

    orderList.insertAdjacentHTML(
        'beforeend',
        getOrderTemplate(data),
    );

    setOrderTotalInfo(data);
}

/** Создаем объекты с данными по элементу заказа и вызываем обносление состояния заказа на странице */
function createNewOrderItem(filteredBlockItems, blockItems) {
    Object.entries(filteredBlockItems).forEach(function (item) {
        var key = item[0];
        var value = item[1];

        switch (key) {
            case 'humburder':
                var newHumburger = humburger(value, FoodConstructor());
                newOrder.setOrderItem(newHumburger);
                break;
            case 'salad':
                var grams = Array.from(blockItems).find((item) => item.getAttribute('id') === 'grams');
                var newSalad = salad({salad: value, grams: grams.value}, FoodConstructor());
                newOrder.setOrderItem(newSalad);
                break;
            case 'drink':
                var newDrink = drink(value, FoodConstructor());
                newOrder.setOrderItem(newDrink);
                break;
            default:
                break;
        }
    });

    setOrder(newOrder.getOrderList());
}

/** Добавление нового элемента заказа */
function submitNewOrderItem(ev) {
    ev.preventDefault();

    var formBlock = ev.submitter.closest('.form__fieldset');

    var blockName = formBlock.getAttribute('id');

    var blockItems = formBlock.querySelectorAll('input');

    createNewOrderItem(getBlockItems(blockName, blockItems), blockItems);
}


// Добавление нового элемента заказа
menuForm.addEventListener('submit', submitNewOrderItem);
// Удаление всех элементов заказа
orderReset.addEventListener('click', resetOrder);
// Изменение состояния чекбоксов
menuForm.addEventListener('click', setCheckboxState);

