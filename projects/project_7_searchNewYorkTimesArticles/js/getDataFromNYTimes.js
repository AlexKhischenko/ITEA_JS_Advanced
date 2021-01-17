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