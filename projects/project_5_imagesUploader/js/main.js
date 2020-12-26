// 1. Navigation - done
// 2. Add event listener - done
// 3. Get info about each image - done
// 4. Create data structure - done
// 5. Save in localstorage - done
// 6. Display images - done

var uploader = document.querySelector('#uploader'),
    imagesList = document.querySelector('.images'),
    images = JSON.parse(localStorage.getItem('images')) || [],
    modal = document.querySelector('.modal'),
    modalDeleteWrapper = document.querySelector('.modal-delete-wrapper'),
    modalDeleteConfirm = document.querySelector('.modal-delete-confirm'),
    modalDeleteCancel = document.querySelector('.modal-delete-cancel'),
    indexOfRemovingImage;

/* Discplay images and their data from the localStorage */
function displayImages(images, imagesList) {
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
      image;
  
  if(FileReader) {
    filesList.forEach(function (file) {
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function(event) {
        image = {};
        image.name = file.name;
        image.size = file.size;
        image.url = event.target.result;
        images.push(image);
        displayImages(images, imagesList);
        localStorage.setItem('images', JSON.stringify(images));
      });
      fileReader.readAsDataURL(file);
    });

  } else {
      alert('FileReader API is not supported by your browser!');
  }
}

/* Remove a file extantion and shorten a file name */
function removeFileExtansion(str) {
  if (str.length > 14) {
    return str.slice(0, 9) + '...';
  } else {
    return str.slice(0, str.length - 4);
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
        modalDeleteWrapper.classList.remove('hidden');
        modal.classList.remove('hidden');
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
        images[i].name = imageDisplayName[i].textContent + images[i].name.slice(images[i].name.length - 4);
        imageDisplayName[i].contentEditable = 'false';
        save.classList.add('hidden');
        imageNameEdit[i].classList.remove('hidden');
        localStorage.setItem('images', JSON.stringify(images));
        displayImages(images, imagesList);
      }
    });
  }

  if (event.target && event.target.classList.contains('image-scale') || event.target.classList.contains('image-scale-icon')) {
    imageScale.forEach(function (scaleImage, i) {

    });
  }
}

/* Setting functionality for modal delete */
function removeImage(event) {
  if (event.target && event.target.classList.contains('modal-delete-cancel') || event.target.classList.contains('modal')) {
    modalDeleteWrapper.classList.add('hidden');
    modal.classList.add('hidden');
  }
  if (event.target && event.target.classList.contains('modal-delete-confirm')) {
    images.splice(indexOfRemovingImage, 1);
    localStorage.setItem('images', JSON.stringify(images));
    displayImages(images, imagesList);
    modalDeleteWrapper.classList.add('hidden');
    modal.classList.add('hidden');
  }
}

/* Display data from the localStorage when user opens the page */
displayImages(images, imagesList);

/* Add event listeners */
uploader.addEventListener('change', uploadImages);
imagesList.addEventListener('click', chooseImage);
modal.addEventListener('click', removeImage);

