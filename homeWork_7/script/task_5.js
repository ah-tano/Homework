const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const showInput = () => {
  input.addEventListener('input', event => {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
      output.textContent = 'незнакомец';
    }
  });
};
showInput();
