const apiKey = '59d4b4c3014c8d60bd8b26591330fb60'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&q=';

const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const locationButton = document.getElementById('locationButton');
const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const humidity = document.getElementById('humidity');
const forecast = document.getElementById('forecast');
const celsiusButton = document.getElementById('celsiusButton');
const fahrenheitButton = document.getElementById('fahrenheitButton');

let isCelsius = true;

// Fetch Weather Data
async function getWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data); // Log the API response

    if (data.cod === 401) {
      weatherResult.innerHTML = `<p>Invalid API key. Please check your API key.</p>`;
    } else if (data.cod === '404') {
      weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
    } else if (data.cod === 200) {
      displayWeather(data);
      getForecast(city);
    } else {
      weatherResult.innerHTML = `<p>An unexpected error occurred. Please try again later.</p>`;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error); // Log the error
    weatherResult.innerHTML = `<p>An error occurred. Please try again later.</p>`;
  }
}

// Display Weather Data
function displayWeather(data) {
  const { name, main, weather } = data;
  cityName.textContent = name;
  weatherIcon.className = `wi wi-owm-${weather[0].id}`;
  temperature.textContent = `${Math.round(main.temp)}°C`;
  weatherDescription.textContent = weather[0].description;
  humidity.textContent = `Humidity: ${main.humidity}%`;
}

// Fetch 5-Day Forecast
async function getForecast(city) {
  try {
    const response = await fetch(forecastUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data); // Log the API response

    if (data.cod === '200') {
      displayForecast(data.list);
    }
  } catch (error) {
    console.error('Error fetching forecast data:', error); // Log the error
  }
}

// Display 5-Day Forecast
function displayForecast(forecastData) {
  forecast.innerHTML = '';
  for (let i = 0; i < forecastData.length; i += 8) {
    const day = forecastData[i];
    const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    const icon = `wi wi-owm-${day.weather[0].id}`;
    const temp = `${Math.round(day.main.temp)}°C`;

    const forecastItem = document.createElement('div');
    forecastItem.className = 'forecast-item';
    forecastItem.innerHTML = `
      <p>${date}</p>
      <i class="${icon}"></i>
      <p>${temp}</p>
    `;
    forecast.appendChild(forecastItem);
  }
}

// Get Weather by Location
locationButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeatherByCoords(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
        weatherResult.innerHTML = `<p>Unable to retrieve your location.</p>`;
      }
    );
  } else {
    weatherResult.innerHTML = `<p>Geolocation is not supported by your browser.</p>`;
  }
});

// Fetch Weather by Coordinates
async function getWeatherByCoords(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await response.json();
    displayWeather(data);
    getForecastByCoords(lat, lon);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Fetch Forecast by Coordinates
async function getForecastByCoords(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await response.json();
    displayForecast(data.list);
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
}

// Toggle Temperature Unit
celsiusButton.addEventListener('click', () => {
  if (!isCelsius) {
    isCelsius = true;
    celsiusButton.classList.add('active');
    fahrenheitButton.classList.remove('active');
    convertTemperature('celsius');
  }
});

fahrenheitButton.addEventListener('click', () => {
  if (isCelsius) {
    isCelsius = false;
    fahrenheitButton.classList.add('active');
    celsiusButton.classList.remove('active');
    convertTemperature('fahrenheit');
  }
});

// Convert Temperature
function convertTemperature(unit) {
  const temp = parseFloat(temperature.textContent);
  if (unit === 'fahrenheit') {
    temperature.textContent = `${Math.round((temp * 9) / 5 + 32)}°F`;
  } else {
    temperature.textContent = `${Math.round(((temp - 32) * 5) / 9)}°C`;
  }
}

// Form Submission
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    weatherResult.innerHTML = `<p>Please enter a city name.</p>`;
  }
});