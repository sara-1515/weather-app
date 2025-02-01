Weather App 🌦️
A simple and responsive web application that fetches and displays current weather data and a 5-day forecast for any city using the OpenWeatherMap API.

Features ✨
Current Weather: Displays the current temperature, weather condition, and humidity for a searched city.

5-Day Forecast: Shows a 5-day weather forecast with icons and temperatures.

Location-Based Weather: Fetches weather data based on the user's current location.

Temperature Unit Toggle: Switch between Celsius and Fahrenheit.

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.

Screenshots 📸
Weather App Screenshot
Add a screenshot of your app here.

Technologies Used 🛠️
Frontend: HTML, CSS, JavaScript

API: OpenWeatherMap API

Icons: Weather Icons

Deployment: GitHub Pages / Netlify / Vercel

How to Use 🚀
Search for a City:

Enter the name of a city in the search bar and click Get Weather.

Use Your Location:

Click the location button to fetch weather data for your current location.

Toggle Temperature Units:

Switch between Celsius and Fahrenheit using the toggle buttons.

Setup Instructions 🛠️
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari).

An API key from OpenWeatherMap.

Steps
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/weather-app.git
cd weather-app
Add Your API Key:

Open the script.js file.

Replace 'your_api_key_here' with your actual OpenWeatherMap API key:

javascript
Copy
const apiKey = 'your_api_key_here';
Run the App Locally:

Open the index.html file in your browser.

Alternatively, use a local server (e.g., VS Code Live Server).

Deploy the App:

Deploy the app to GitHub Pages, Netlify, or Vercel for live access.

API Reference 📚
This app uses the OpenWeatherMap API to fetch weather data. Below are the endpoints used:

Current Weather
Copy
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={apiKey}
5-Day Forecast
Copy
https://api.openweathermap.org/data/2.5/forecast?units=metric&q={city}&appid={apiKey}
Weather by Location
Copy
https://api.openweathermap.org/data/2.5/weather?units=metric&lat={latitude}&lon={longitude}&appid={apiKey}
Contributing 🤝
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeature).

Open a pull request.

Acknowledgments 🙏
Thanks to OpenWeatherMap for providing the weather data API.

Inspired by Weather Icons for the beautiful weather icons.

Live Demo 🌐
Check out the live demo of the app: Weather App Live Demo

Feel free to customize this README.md to suit your project. Let me know if you need further assistance! 😊

New chat
