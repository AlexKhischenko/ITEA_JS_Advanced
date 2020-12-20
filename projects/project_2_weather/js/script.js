/*
1. Get all necessary DOM elements
2. Add event listener
    2.1 For the first part (current location)
    2.2 For the second part (user-selected city)
3. Get my coordinates
    3.1 Get coordinates
    3.2 Get local city name
4. Make HTTP request
5. Covert Kelvin to Celsius
6. Display data
    6.1 Display recieved parameters
    6.2 Display city name
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
    btnSpeech = document.querySelector('.btn-speech'),
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
  cityNameValue = titleCase(cityName.value);
  weatherCurrentLocation.innerText = cityNameValue;
  cityName.value = ''; /* Clear placeholder */
  getWeatherData();
}

/* Convert first letter of rhe city to upperCase */
function titleCase(str) {
  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

/* Getting json response with weather data */
function getWeatherData(latitude, longitude) {
  var api;
  if (latitude && longitude) {
    api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=66d7c3fb840d30a551d86ce85c5f9832`;
  } else {
    api = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=66d7c3fb840d30a551d86ce85c5f9832`;
  }
  loader.classList.remove('hidden');
  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(recievedData) {
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

/* Kelvin to Celsius */
function converKelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

/* Display all weather parameters */
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
    case 'Mist':
      weatherIcon.innerHTML = '<i class="fas fa-smog"></i>';
      break;
    default:
      weatherIcon.innerHTML = '<i class="fas fa-cloud-sun"></i>';
      break;
  }
  currentTemperature.innerText = Math.ceil(converKelvinToCelsius(recievedWeatherData.main.temp));
  feelsLike.innerText = Math.ceil(converKelvinToCelsius(recievedWeatherData.main[feels]));
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




/* SpeechRecognition */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; /* Если не браузер не поддерживает */

var recognition = new SpeechRecognition();
var cityBySpeech;

recognition.lang = 'ru-RU'; /* Указывается язык распознавания */
// recognition.interimResults = true; /* Показывает не финальный, а промежуточный результат сформированных слов */

recognition.addEventListener('result', function (event) {
    cityBySpeech = Array
      .from(event.results)
      .map(function (result) {
          return result[0];
      })
      .map(function (result) {
          return result.transcript;
      })
      .join('');

    if(event.results[0].isFinal) { /* Срабатывает, когда в речи делается пауза */
      switch (cityBySpeech) {
        case 'go':
        case 'гоу':
        case 'найти':
        case 'поиск':
          getCityName();
          break;
        default:
          cityName.value = cityBySpeech;
          break;
      }
    }
});

function startSpeaking() {
  recognition.addEventListener('end', recognition.start); /* Постоянно поддерживает включеный микрофон */
  recognition.start(); /* Включает микрофон. При остутствиие речи микрофон выключается */
}

btnSpeech.addEventListener('click', startSpeaking); /* Включает микрофон по клику на кнопку "Speech" */
