// https://github.com/goitacademy/javascript-homework/tree/master/homework-10

import dishes from './menu.json';
import dishItemTemplate from './dish-item.hbs'
import './styles.css';

const menuList = document.querySelector('.js-menu');
const buildMenuList = posts => {
    const dishMarkup = posts.map(post => dishItemTemplate(post)).join('');
    menuList.insertAdjacentHTML('beforeend', dishMarkup);
}
buildMenuList(dishes);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.js-switch-input');

body.classList.add(Theme.LIGHT);

const setUserThemeChoiceByDefault = () => {
    const userThemeChoice = localStorage.getItem('theme');
    if (userThemeChoice) {
        body.classList.value = userThemeChoice;
    }
    if (body.classList.value === Theme.DARK) {
        themeSwitcher.checked = 'true';
    }
}
setUserThemeChoiceByDefault();

const saveUserThemeChoice = () => {
    themeSwitcher.addEventListener('change', (e) => {
        body.classList.toggle(Theme.DARK);
        body.classList.toggle(Theme.LIGHT);

        localStorage.setItem('theme', body.classList.value);
    });
}
saveUserThemeChoice();

