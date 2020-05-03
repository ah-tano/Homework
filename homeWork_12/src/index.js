// https://github.com/goitacademy/javascript-homework/tree/master/homework-12

import './styles.css';
import countryRendering from './services/countries-rendering.js';
import countryTemplate from './templates/country-info.hbs';
import fetchCountries from './services/fetchCountries.js'
const debounce = require('lodash.debounce');
const { error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';


const input = document.getElementById('search');
const countriesListField = document.querySelector('.countries-list');
const reflectedCountry = document.querySelector('.selected-country');


const inputHandler = () => {
  fetchCountries(input.value).then(data => {
    const listOfNames = countryRendering.getCountriesNames(data);

    if (input.value !== '') {
      reflectedCountry.innerHTML = ''
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
      })
    }

    if (listOfNames.length - 1 <= 10 && listOfNames.length - 1 > 1) {
      const elements = countryRendering.createElements(listOfNames);
      countryRendering.appendElements(elements, countriesListField);
    }

    if (listOfNames.length - 1 > 10) {
      const myError = error({
        title: "Please enter again!",
        text: "Too many matches found. Please enter a more specific query!",
        width: '320px',
        sticker: false,
        closer: false,
        delay: 2000,
      })
    }
  });
};

input.addEventListener('input', debounce(inputHandler, 800));

