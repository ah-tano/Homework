// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputField = document.getElementById('validation-input');
const inputLength = inputField.dataset.length;

const checkInputValidity = () => {
  inputField.addEventListener('change', event => {
    const userInputLength = event.currentTarget.value.length;
    if (userInputLength > inputLength || userInputLength < inputLength) {
      inputField.classList.add('invalid');
    } else {
      inputField.classList.add('valid');
    }
  });
};
checkInputValidity();

const cleanInputField = () => {
  inputField.addEventListener('focus', () => {
    if (inputField.classList.contains('invalid')) {
      inputField.classList.remove('invalid');
    }
    if (inputField.classList.contains('valid')) {
      inputField.classList.remove('valid');
    }
    inputField.value = '';
  });
};
cleanInputField();
