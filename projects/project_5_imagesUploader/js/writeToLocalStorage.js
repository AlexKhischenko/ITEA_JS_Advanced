/* Write changes to LocalStorage */
function writeToLocalStorage() {
  localStorage.setItem('images', JSON.stringify(images));
}