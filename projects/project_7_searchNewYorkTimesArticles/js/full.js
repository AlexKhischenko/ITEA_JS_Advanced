// Variables declaration
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const closeBtn = document.querySelector('.close');

let pageIndex = 0;

showDefaultStructure();

// Generate API
function createAPI(req, page) {
  return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req}&page=${page}&fq=source:("The New York Times")&api-key=99Bp7brwTYKckRu9FbBI5weBIJdDpEjA`;
}

// Sending a request and geting a response from NYT
let getDataFromNYTimes = function() {

  if (searchInput.value === '' || searchInput.value === ' ') {
    hideCloseBtn();
    showDefaultStructure();
  } else {
    showCloseBtn();
    let api = createAPI(searchInput.value, pageIndex);

    fetch(api).then(function(response) {
      return response.json();
    }).then(function(recievedData) {

      console.log(recievedData);
      let articlesData = recievedData.response.docs.map(function(article) {
        return {
          header: article.headline.main,
          url: article.web_url,
          description: article.lead_paragraph,
          sectionName: article.section_name,
          typeOfMaterial: article.type_of_material,
        };
      });
      displayArticles(articlesData);
    });
  }
};

// Show default list structure
function showDefaultStructure() {
  suggestions.innerHTML = `
    <li>There will be searching articles ...</li>
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

// Display found articles
function displayArticles(articlesArr) {

  suggestions.innerHTML = articlesArr.map(function (article) {
    return `
      <li>
        <a href="${article.url}" target="_blank"><h2>${article.header}</h2></a>
        <div>${article.description}</div>
        <span>${article.sectionName}. ${article.typeOfMaterial}</span>
      </li>
    `;
  }).join('');
}

// Debounce function
const debounce = function(fn, ms) {
  let timeout;
  return function () {
    const fnCall = function() {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

// Events listeners
getDataFromNYTimes = debounce(getDataFromNYTimes, 350);
searchInput.addEventListener('keyup', getDataFromNYTimes);
closeBtn.addEventListener('click', clearSearchInput);
