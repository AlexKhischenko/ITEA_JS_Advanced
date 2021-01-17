// Generate API
function createAPI(req, page) {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req}&page=${page}&fq=source:("The New York Times")&api-key=99Bp7brwTYKckRu9FbBI5weBIJdDpEjA`;
  }