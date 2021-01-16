// Variables declaration
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const closeBtn = document.querySelector('.close');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

showDefaultStructure();

// Sending a request and getting a response
fetch(endpoint)
  .then(function (blob) {
      return blob.json();
  })
  .then(function (data) {
      cities.push(...data);
  });

// Find matches in the cities and states names
function findMatches(text, cities) {
  if (text === '' || text === ' ') {
    hideCloseBtn();
    return false;
  }
  showCloseBtn();
  return cities.filter(function (place) {
    if (place.city.toLowerCase().includes(text.toLowerCase()) || place.state.toLowerCase().includes(text.toLowerCase())) {
      return place;
    }
  });
}

// Show default list structure
function showDefaultStructure() {
  suggestions.innerHTML = `
    <li>Filter for a city</li>
    <li>Or a state</li>
  `;
}

// Clear search input
function clearSearchInput() {
  searchInput.value = '';
  hideCloseBtn();
  showDefaultStructure();
}

// Hide close button
function hideCloseBtn() {
  closeBtn.classList.remove('active');
}

// Show close button
function showCloseBtn() {
  closeBtn.classList.add('active');
}

// Display found matches
function displayMatches() {
  let regexp = new RegExp(`${this.value}`, 'i');
  const matchArray = findMatches(this.value, cities);

  if (matchArray) {
    suggestions.innerHTML = matchArray.map(function (place) {
      return `
        <li>
        <div><span class="description">City:</span> ${place.city.replace(regexp, "<mark>$&</mark>")}</div>
        <div><span class="description">State:</span> ${place.state.replace(regexp, "<mark>$&</mark>")}</div>
        <div><span class="description">Population:</span> ${place.population}</div>
        </li>
      `;
    }).join('');
  } else {
    showDefaultStructure();
  }
}

// Events listeners
searchInput.addEventListener('keyup', displayMatches);
closeBtn.addEventListener('click', clearSearchInput);