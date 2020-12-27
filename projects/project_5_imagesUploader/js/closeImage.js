/* Close modal image by clicking close button or free space */
function closeImage(event) {
  if (event.target && event.target.classList.contains('modal-image-close') || event.target.classList.contains('modal-image')) {
    hideModal(modalImage);
  }
}