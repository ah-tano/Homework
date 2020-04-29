// https://github.com/goitacademy/javascript-homework/tree/master/homework-11

// https://github.com/goitacademy/javascript-homework/tree/master/homework-11/color-switch


// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

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
        this.isActive = true;
        const randomColor = this.randomIntegerFromInterval(0, colors.length - 1);
        console.log(randomColor)
        this.colorTimer = setInterval(() => {

            colors.filter((color, index) => {

                if (index === randomColor) {
                    body.style.backgroundColor = color;
                }
            })
        }, 1000)
    },
}

const startBtn = document.querySelector('button[data-action="start"]');

startBtn.addEventListener('click', timer.start.bind(timer))