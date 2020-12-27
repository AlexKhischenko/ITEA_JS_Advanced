/* Discplay images and their data from the localStorage */
function displayImages(images, imagesList, max = 100, value = 0) {
  imagesList.innerHTML = images.map(function (image, index) {
    console.log(max, value);
    return `
      <li>
        <figure>
          <div class="image-wrapper">
            <div class="image-scale">
              <img src="./img/scale.png" alt="scale" class="image-scale-icon">
            </div>
            <img src=${image.url} alt="Image ${index + 1}">
          </div>
          <figcaption class="image-description">

            <div class="progress-wrapper">
              <progress class="progress-line" max=${max} value=${value}></progress>
            </div>

            <p class="image-display-name" contenteditable="false">${removeFileExtansion(image.name)}</p>
            <p class="image-display-size">${(image.size / 1000).toFixed(1)} kB</p>
          </figcaption>
          <div class="remove-button">
            <img src="./img/edit.png" alt="edit" class="image-name-edit">
            <img src="./img/save.png" alt="save" class="image-name-save hidden">
            <img src="./img/delete.png" alt="delete" class="image-delete">
          </div>
        </figure>
      </li>
    `;
  }).join('');
}