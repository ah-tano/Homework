// https://github.com/goitacademy/javascript-homework/tree/master/homework-12
import './styles.css';
import countriesRendering from './services/countries-rendering.js';
import countryTemplate from './templates/country-info.hbs';
import fetchCountries from './services/fetchCountries.js';
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
const debounce = require('lodash.debounce');

const input = document.getElementById('search');
const countriesListField = document.querySelector('.countries-list');
const reflectedCountry = document.querySelector('.selected-country');

const inputHandler = () => {
  if (input.value === '') {
    return;
  }

  fetchCountries(input.value).then(data => {
    const listOfNames = countriesRendering.getCountriesNames(data);

    if (input.value !== '') {
      reflectedCountry.innerHTML = '';
    }

    if (countriesListField.innerHTML !== '') {
      countriesListField.innerHTML = '';
    }

    if (listOfNames.length === 1) {
      countriesListField.innerHTML = '';

      data.find(country => {
        const countryInfo = countryTemplate(country);
        reflectedCountry.insertAdjacentHTML('beforeend', countryInfo);
        input.value = '';
      });
    } else if (listOfNames.length <= 10 && listOfNames.length > 1) {
      const elements = countriesRendering.createElements(listOfNames);
      countriesRendering.appendElements(elements, countriesListField);
    } else if (listOfNames.length > 10) {
      const myError = error({
        title: 'Please enter again!',
        text: 'Too many matches found. Please enter a more specific query!',
        width: '280px',
        sticker: false,
        closer: false,
        delay: 1500,
        addClass: 'error-notification',
      });
    }
  });
};

input.addEventListener('input', debounce(inputHandler, 500));
