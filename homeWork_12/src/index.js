import './styles.css';
const debounce = require('lodash.debounce');

const input = document.getElementById('search');
const searchBtn = document.querySelector('button[data-action="search"]');
searchBtn.addEventListener('click', e => {
  console.log(input.value);
});

const sendRequest = () => {
  const baseUrl = 'https://restcountries.eu/rest/v2';
  const resource = '/name/';
  const countyName = input.value;
  fetch(baseUrl + resource + countyName)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const countriesListField = document.querySelector('.countries-list');

      let countriesList = data.map(country => {
        console.log(country);
        const countryItem = document.createElement('li');
        countryItem.textContent = country.name;
        return countryItem;
        // countriesListField.appendChild(countryItem);
      });

      console.log(countriesList);

      //   countriesListField.append(countriesList);
    });
};

input.addEventListener('input', debounce(sendRequest, 800));
