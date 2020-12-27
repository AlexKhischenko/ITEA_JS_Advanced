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