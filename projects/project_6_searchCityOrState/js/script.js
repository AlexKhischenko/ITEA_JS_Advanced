const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

showDefaultStructure();

fetch(endpoint)
  .then(function (blob) {
      return blob.json();
  })
  .then(function (data) {
      cities.push(...data);
  });

function findMatches(text, cities) {
  if (text === '' || text === ' ') {
    return false;
  }
  return cities.filter(function (place) {
    if (place.city.toLowerCase().includes(text) || place.state.toLowerCase().includes(text))
    return place;
  })
}

function showDefaultStructure() {
  suggestions.innerHTML = `
    <li>Filter for a city</li>
    <li>Or a state</li>
  `
}

function displayMatches() {
  const matchArray = findMatches(this.value.toLowerCase(), cities);
  let inputValue = this.value;
  let inputValueWithMark = `<mark>${inputValue}</mark>`;

  if (matchArray) {
    suggestions.innerHTML = matchArray.map(function (place) {
      return `
        <li>
        <div><span class="description">State:</span> ${place.state.replace(inputValue, inputValueWithMark)}</div>
        <div><span class="description">City:</span> ${place.city.replace(inputValue, inputValueWithMark)}</div>
        <div><span class="description">Population:</span> ${place.population}</div>
        </li>
      `
    }).join('');
  } else showDefaultStructure();
}

searchInput.addEventListener('keyup', displayMatches);