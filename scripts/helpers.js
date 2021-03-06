/** Итоговая сумма заказа */
function getTotalPrice(data) {
    return data.reduce((acc, cur) => acc + cur.calculatePrice(), 0);
}

/** Итоговая сумма калорий */
function getTotalCalories(data) {
    return data.reduce((acc, cur) => acc + cur.calculateCalories(), 0);
}

/** Изменение состояния чекбоксов */
function changeChackboxState(target) {
    if (target.hasAttribute('checked')) {
        target.removeAttribute('checked');

        return;
    }

    target.setAttribute('checked', true);
}

/** Изменение состояния радиокнопок */
function changeRadioState(target) {
    const formBlock = target.closest('.form__item');
    const blockItems = formBlock.querySelectorAll('input');

    Array.from(blockItems).forEach(function (item) {
        if (item.getAttribute('id') !== target.id) {
            item.removeAttribute('checked');

            return;
        }

        item.setAttribute('checked', true);
    })
}

/** Шаблон элементов заказа (простой вариант с онкликом) */
function getOrderTemplate(data) {
    return data.map(function (item) {
        return `
            <ul class="order__item">
                <p>${item.getDescription()}</p>
                <p>Цена ${item.calculatePrice()}</p>
                <p>Калории ${item.calculateCalories()}</p>
                <button onclick="removeItem(${item.getId()})">Удалить</button>
            </ul>
        `;
    }).join('');
}

/** Данные по отмеченным в меню позициям: название блока, массив отмеченных чекбоксов/радиокнопок */
function getBlockItems(blockName, blockItems) {
    return Array.from(blockItems).reduce((acc, cur) => {
        if (cur.hasAttribute('checked')) {
            acc[blockName].push(cur.value);

            return acc;
        }

        return acc;
    }, {[blockName]: []});
}