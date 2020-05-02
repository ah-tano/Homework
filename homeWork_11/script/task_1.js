// https://github.com/goitacademy/javascript-homework/tree/master/homework-11

// https://github.com/goitacademy/javascript-homework/tree/master/homework-11/color-switch

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');

const timer = {
  isActive: false,
  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    let randomColorIndex;

    this.colorTimer = setInterval(() => {
      randomColorIndex = this.randomIntegerFromInterval(0, colors.length - 1);
      body.style.backgroundColor = colors[randomColorIndex];
    }, 1000);
  },
  stop() {
    clearInterval(this.colorTimer);
    this.isActive = false;
  },
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
