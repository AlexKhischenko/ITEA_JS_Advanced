/*
1. Get all necessary DOM elements
2. Add event listener
    2.1 For the first part (current location)
    2.2 For the second part (user-selected city)
3. Get my coordinates
4. Make HTTP request
5. Display recieved data
*/

/* Getting all necessary DOM elements */
var weatherCurrentLocation = document.querySelector('.weather-current-location'),
    currentTemperature = document.querySelector('.current-temperature'),
    feelsLike = document.querySelector('.feels-like'),
    minTemperature = document.querySelector('.min-temperature'),
    maxTemperature = document.querySelector('.max-temperature'),
    pressure = document.querySelector('.pressure'),
    humidity = document.querySelector('.humidity'),
    clouds = document.querySelector('.clouds'),
    windSpeed = document.querySelector('.wind-speed'),
    getWeatherBtn = document.querySelector('.get-weather-btn');

/* Display recieved data */
function getCurrentLocationCoordinates() {
  if (navigator.geolocation) { /* check if user brouser supoport navigation */
    navigator.geolocation.getCurrentPosition(function(position) {
      var currentLatitude = position.coords.latitude,
          currentLongitude = position.coords.longitude;
      getWeatherData(currentLatitude, currentLongitude);
    });
  } else { /* ask to use another browser */
    alert('Could you try to use another browser because current one does not support a navigation!');
  }
}

function getWeatherData(latitude, longitude) {
  console.log(latitude, longitude);
}

/* Add event listener for the first part (current location) */
getWeatherBtn.addEventListener('click', getCurrentLocationCoordinates);