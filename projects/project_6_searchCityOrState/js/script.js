const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(function (blob) {
        return blob.json();
    })
    .then(function (data) {
        cities.push(...data);
    });

function findMatches(text, cities) {
    return cities.filter(function (place) {
        return place.city.includes(text) || place.state.includes(text);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    suggestions.innerHTML = matchArray.map(function (place) {
        return `
            <li>
                <span>${place.city} ${place.state}</span>
            </li>
        `
    }).join('');

}

searchInput.addEventListener('keyup', displayMatches);