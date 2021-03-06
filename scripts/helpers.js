'use strict';

/** Итоговая сумма заказа */
function getTotalPrice(data) {
    return data.reduce((acc, cur) => acc + cur.calculatePrice(), 0);
}

/** Итоговая сумма калорий */
function getTotalCalories(data) {
    return data.reduce((acc, cur) => acc + cur.calculateCalories(), 0);
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