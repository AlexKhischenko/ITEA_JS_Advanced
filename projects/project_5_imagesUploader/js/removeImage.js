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