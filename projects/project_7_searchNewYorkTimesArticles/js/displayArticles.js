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