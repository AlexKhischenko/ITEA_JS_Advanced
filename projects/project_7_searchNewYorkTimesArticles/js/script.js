// Variables declaration
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const closeBtn = document.querySelector('.close');

let pageIndex = 0;

showDefaultStructure();

// Events listeners
getDataFromNYTimes = debounce(getDataFromNYTimes, 350);
searchInput.addEventListener('keyup', getDataFromNYTimes);
closeBtn.addEventListener('click', clearSearchInput);
