// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const amountField = document.querySelector('#controls input');
const boxes = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
let elementWidth = 30;
let elementHeight = 30;

const getRandomColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

  return bgColor;
};

const createElement = () => {
  let newElement = document.createElement('div');
  newElement.style.backgroundColor = getRandomColor();
  newElement.style.width = elementWidth + 'px';
  elementWidth += 10;
  newElement.style.height = elementHeight + 'px';
  elementHeight += 10;

  return newElement;
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const element = createElement();
    boxes.appendChild(element);
  }
};

createBtn.addEventListener('click', () => {
  let value = amountField.value;
  createBoxes(value);
  amountField.value = '';
});

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = '';
    elementWidth = 30;
    elementHeight = 30;
  });
};
destroyBoxes();
