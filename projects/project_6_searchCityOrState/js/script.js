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

// Events listeners
searchInput.addEventListener('keyup', displayMatches);
closeBtn.addEventListener('click', clearSearchInput);