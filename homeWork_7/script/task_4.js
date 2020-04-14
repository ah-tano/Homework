// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const value = document.getElementById('value');

const decrement = document.querySelector('button:first-child');
const decreaseValue = (num) => {
    decrement.addEventListener('click', (num) => {
        counterValue -= 1;
        value.textContent = counterValue;
    })
}

decreaseValue(value);

const increment = document.querySelector('button:last-child');
const increaseValue = (num) => {
    increment.addEventListener('click', (num) => {
        counterValue += 1;
        value.textContent = counterValue;
    })
}

increaseValue(value);

