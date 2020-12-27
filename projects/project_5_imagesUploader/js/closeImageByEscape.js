/* Close modal image by Escate */
function closeImageByEscape(event) {
  if (event.code === 'Escape' && modalImage.className !== 'hidden') {
    hideModal(modalImage);
  }
  if (event.code === 'Escape' && modalDelete.className !== 'hidden') {
    hideModal(modalDelete);
  }
}