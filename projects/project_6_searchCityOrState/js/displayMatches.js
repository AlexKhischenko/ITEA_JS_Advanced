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