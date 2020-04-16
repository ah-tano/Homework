const getRandomColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

  return bgColor;
};

let elementWidth = 30;
let elementHeight = 30;

const createElement = () => {
  let newElement = document.createElement('div');
  newElement.style.backgroundColor = getRandomColor();
  newElement.style.width = elementWidth + 'px';
  elementWidth += 10;
  newElement.style.height = elementHeight + 'px';
  elementHeight += 10;

  return newElement;
};

const amountField = document.querySelector('#controls input');
const boxes = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-action="render"]');

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

const destroyBtn = document.querySelector('button[data-action="destroy"]');

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = '';
    elementWidth = 30;
    elementHeight = 30;
  });
};
destroyBoxes();
