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