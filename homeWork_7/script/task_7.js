// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById('font-size-control');
const text = document.getElementById('text');
const fontSize = text.style.fontSize;

const changeFontStyle = () => {
  input.addEventListener('input', () => {
    let userInput = input.value;
    let userValueInPx = userInput + 'px';

    text.style.fontSize = userValueInPx;
  });
};
changeFontStyle();
