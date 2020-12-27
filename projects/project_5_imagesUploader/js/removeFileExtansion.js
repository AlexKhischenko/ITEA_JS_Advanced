/* Remove a file extantion and shorten a file name */
function removeFileExtansion(str) {
  if (str.length > maxNumberOfLetters) {
    return str.slice(0, maxNumberOfVisibleLetters) + '...';
  } else {
    return str.slice(0, str.length - extension);
  }
}