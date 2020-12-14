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
var weatherCurrentLocation = document.querySelector('.weather-current-city'),
    currentTemperature = document.querySelector('.current-temperature'),
    feelsLike = document.querySelector('.feels-like'),
    pressure = document.querySelector('.pressure'),
    humidity = document.querySelector('.humidity'),
    windSpeed = document.querySelector('.wind-speed'),
    clouds = document.querySelector('.clouds'),
    visibility = document.querySelector('.visibility'),
    weatherBtn = document.querySelector('.btn-one'),
    cityNameBtn = document.querySelector('.btn-two'),
    cityName = document.querySelector('.weather-city-name'),
    weatherDescription = document.querySelector('.weather-description'),
    weatherIcon = document.querySelector('.weather-icon'),
    loader = document.querySelector('.cs-loader'),
    feels = 'feels_like',
    cityNameValue;

/* Getting coordinates */
function getCurrentLocationCoordinates() {
  if (navigator.geolocation) { /* check if user brouser supoport navigation */
    getUserLocation();
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  } else { /* ask to use another browser */
    alert('Could you try to use another browser because current one does not support a navigation!');
  }
}

/* Getting local city name */
function getCityName() {
  cityNameValue = cityName.value;
  weatherCurrentLocation.innerText = cityName.value;
  cityName.value = ''; /* Clear placeholder */
  getWeatherData();
}

/* Getting json response with weather data */
function getWeatherData(latitude, longitude) {
  loader.classList.remove('hidden');
  var api;
  if (latitude && longitude) {
    api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=66d7c3fb840d30a551d86ce85c5f9832&units=metric`;
  } else {
    api = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=66d7c3fb840d30a551d86ce85c5f9832&units=metric`;
  }
  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(recievedData) {
      console.log(recievedData);
      displayRecievedWeatherData(recievedData);
      loader.classList.add('hidden');
    });
}

/* Getting json response with user location data */
function getUserLocation() {
  fetch(`https://ipapi.co/json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(recievedData) {
      displayUserLocation(recievedData);
    });
}

/* Display local user location */
function displayUserLocation(recievedLocationData) {
  weatherCurrentLocation.innerText = `${recievedLocationData.city}`;
}

function displayRecievedWeatherData(recievedWeatherData) {
  switch(recievedWeatherData.weather[0].main) {
    case 'Rain':
      weatherIcon.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      break;
    case 'Snow':
      weatherIcon.innerHTML = '<i class="far fa-snowflake"></i>';
      break;
    case 'Clouds':
      weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';
      break;
    case 'Clear':
      weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
      break;
    default:
      weatherIcon.innerHTML = '<i class="fas fa-cloud-sun"></i>';
      break;
  }
  currentTemperature.innerText = Math.ceil(recievedWeatherData.main.temp);
  feelsLike.innerText = Math.ceil(recievedWeatherData.main[feels]);
  pressure.innerText = recievedWeatherData.main.pressure;
  humidity.innerText = recievedWeatherData.main.humidity;
  windSpeed.innerText = recievedWeatherData.wind.speed;
  clouds.innerText = recievedWeatherData.clouds.all;
  visibility.innerText = recievedWeatherData.visibility;
  weatherDescription.innerText = recievedWeatherData.weather[0].description;
}

/* Add event listener for the first part (current location) */
weatherBtn.addEventListener('click', getCurrentLocationCoordinates);
cityNameBtn.addEventListener('click', getCityName);