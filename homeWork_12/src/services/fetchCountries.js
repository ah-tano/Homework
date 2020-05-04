export default function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2';
  const resource = '/name/';
  const countyName = searchQuery;

  return fetch(baseUrl + resource + countyName).then(response => {
    return response.json();
  });
}
