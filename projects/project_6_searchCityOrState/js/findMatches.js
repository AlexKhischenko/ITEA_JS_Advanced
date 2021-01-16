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