const value = document.getElementById('value');
let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const decreaseValue = num => {
  decrement.addEventListener('click', num => {
    counterValue -= 1;
    value.textContent = counterValue;
  });
};
decreaseValue(value);

const increment = document.querySelector('button[data-action="increment"]');
const increaseValue = num => {
  increment.addEventListener('click', num => {
    counterValue += 1;
    value.textContent = counterValue;
  });
};
increaseValue(value);
