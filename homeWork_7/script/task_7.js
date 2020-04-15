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
