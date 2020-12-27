// 1. Navigation - done
// 2. Add event listener - done
// 3. Get info about each image - done
// 4. Create data structure - done
// 5. Save in localstorage - done
// 6. Display images - done

var uploader = document.querySelector('#uploader'),
    imagesList = document.querySelector('.images'),
    images = JSON.parse(localStorage.getItem('images')) || [],
    modalDelete = document.querySelector('.modal-delete'),
    modalDeleteWrapper = document.querySelector('.modal-delete-wrapper'),
    modalDeleteConfirm = document.querySelector('.modal-delete-confirm'),
    modalDeleteCancel = document.querySelector('.modal-delete-cancel'),
    modalImage = document.querySelector('.modal-image'),
    modalImageWrapper = document.querySelector('.modal-image-wrapper'),
    maxNumberOfLetters = 14,
    maxNumberOfVisibleLetters = 9,
    extension = 4,
    indexOfRemovingImage;

/* Discplay images and their data from the localStorage */
function displayImages(images, imagesList, max = 100, value = 0) {
  imagesList.innerHTML = images.map(function (image, index) {
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

/* Images uploader */
function uploadImages() {
  var filesList = Array.from(this.files),
      max,
      value,
      image;
  
  if(FileReader) {
    filesList.forEach(function (file) {
      var fileReader = new FileReader();

      fileReader.onprogress = function(event) {
        if (event.lengthComputable) {
          max = event.total;
          value = event.loaded;
        }
      };

      fileReader.addEventListener('load', function(event) {
        image = {};
        image.name = file.name;
        image.size = file.size;
        image.url = event.target.result;
        images.push(image);
        displayImages(images, imagesList, max, value);
        writeToLocalStorage();
      });

      fileReader.readAsDataURL(file);
    });

  } else {
      alert('FileReader API is not supported by your browser!');
  }
}

/* Write changes to LocalStorage */
function writeToLocalStorage() {
  localStorage.setItem('images', JSON.stringify(images));
}

/* Remove a file extantion and shorten a file name */
function removeFileExtansion(str) {
  if (str.length > maxNumberOfLetters) {
    return str.slice(0, maxNumberOfVisibleLetters) + '...';
  } else {
    return str.slice(0, str.length - extension);
  }
}

/* Setting functionality for 'Edit', 'Delete' and 'Save' image editing */
function chooseImage(event) {

  var imageNameEdit = this.querySelectorAll('.image-name-edit'),
      imageNameSave = this.querySelectorAll('.image-name-save'),
      imageDisplayName = this.querySelectorAll('.image-display-name'),
      imageDelete = this.querySelectorAll('.image-delete'),
      imageScale = this.querySelectorAll('.image-scale'),
      removeButton = this.querySelectorAll('.remove-button');

  if (event.target && event.target.classList.contains('image-delete')) {
    imageDelete.forEach(function (btn, i) {
      if (event.target === btn) {
        var coordinateX,
            coordinateY;
        
        indexOfRemovingImage = i;
        coordinateX = Math.ceil(removeButton[i].getBoundingClientRect().x) - 35;
        coordinateY = Math.ceil(removeButton[i].getBoundingClientRect().y) + window.pageYOffset - 50;
        modalDeleteWrapper.style.transform = `translate(${coordinateX}px, ${coordinateY}px)`;
        showModal(modalDelete);
      }
    });
  }

  if (event.target && event.target.classList.contains('image-name-edit')) {
    imageNameEdit.forEach(function (edit, i) {
      if (event.target === edit) {
        edit.classList.add('hidden');
        imageNameSave[i].classList.remove('hidden');
        imageDisplayName[i].contentEditable = 'true';
        imageDisplayName[i].focus();
      }
    });
  }

  if (event.target && event.target.classList.contains('image-name-save')) {
    imageNameSave.forEach(function (save, i) {
      if (event.target === save) {
        images[i].name = imageDisplayName[i].textContent + images[i].name.slice(images[i].name.length - extension);
        imageDisplayName[i].contentEditable = 'false';
        save.classList.add('hidden');
        imageNameEdit[i].classList.remove('hidden');
        writeToLocalStorage();
        displayImages(images, imagesList);
      }
    });
  }

  if (event.target && event.target.classList.contains('image-scale')) {
    imageScale.forEach(function (scaleImage, i) {
      if (event.target === scaleImage) {
        showModal(modalImage);
        modalImageWrapper.innerHTML = `
        <img src="./img/close.png" alt="close" class="modal-image-close">
        <img src=${images[i].url} alt=${images[i].name} class="modal-image-content">`;
      }
    });
  }
}

/* Setting functionality for modal delete */
function removeImage(event) {
  if (event.target && event.target.classList.contains('modal-delete-cancel') || event.target.classList.contains('modal-delete')) {
    hideModal(modalDelete);
  }
  if (event.target && event.target.classList.contains('modal-delete-confirm')) {
    images.splice(indexOfRemovingImage, 1);
    writeToLocalStorage();
    displayImages(images, imagesList);
    hideModal(modalDelete);
  }
}

/* Close modal image by clicking close button or free space */
function closeImage(event) {
  if (event.target && event.target.classList.contains('modal-image-close') || event.target.classList.contains('modal-image')) {
    hideModal(modalImage);
  }
}

/* Close modal image by Escate */
function closeImageByEscape(event) {
  if (event.code === 'Escape' && modalImage.className !== 'hidden') {
    hideModal(modalImage);
  }
  if (event.code === 'Escape' && modalDelete.className !== 'hidden') {
    hideModal(modalDelete);
  }
}

/* Hide modal */
function hideModal(hideElement) {
  hideElement.classList.add('hidden');
  document.body.style.overflow = '';
}

/* Show modal */
function showModal(showElement) {
  showElement.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/* Display data from the localStorage when user opens the page */
displayImages(images, imagesList);

/* Add event listeners */
uploader.addEventListener('change', uploadImages);
imagesList.addEventListener('click', chooseImage);
modalDelete.addEventListener('click', removeImage);
modalImage.addEventListener('click', closeImage);

/* Close modal by "Escape" key */
document.addEventListener('keydown', closeImageByEscape);

