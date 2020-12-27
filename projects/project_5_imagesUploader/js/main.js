// 1. Navigation - done
// 2. Add event listener - done
// 3. Get info about each image - done
// 4. Create data structure - done
// 5. Save in localstorage - done
// 6. Display images - done
// 7. Add load progress - done
// 8. Add modal - done
// 9. Implement rename function - shorten displayed file names and hide extansions - done
// 10. Imlement delete image function - done
// 11. Implement modal close by Escape button - done
// 12. Implement modal close by click outside - done

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

/* Display data from the localStorage when user opens the page */
displayImages(images, imagesList);

/* Add event listeners */
uploader.addEventListener('change', uploadImages);
imagesList.addEventListener('click', chooseImage);
modalDelete.addEventListener('click', removeImage);
modalImage.addEventListener('click', closeImage);

/* Close modal by "Escape" key */
document.addEventListener('keydown', closeImageByEscape);

