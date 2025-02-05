🌦️ Weather App
A modern, responsive web application that fetches and displays current weather data and a 5-day forecast for any city using the OpenWeatherMap API.

✨ Features
Current Weather: Displays temperature, weather conditions, and humidity.
5-Day Forecast: Shows a 5-day forecast with weather icons and temperatures.
Location-Based Weather: Fetches data for the user's current location.
Temperature Unit Toggle: Switch between Celsius and Fahrenheit.
Modern UI: Clean and responsive design for a smooth experience.
🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
API: OpenWeatherMap API
Icons: Weather Icons
Deployment: GitHub Pages, Netlify, or Vercel
🚀 Installation
1️⃣ Clone the Repository
```bash
git clone https://github.com/sara-1515/weather-app.git
cd weather-app
```
2️⃣ Install Dependencies (if required)
```bash
npm install
```
3️⃣ Add API Key
Open the script.js file
Replace 'your_api_key_here' with your actual API key:
```javascript

const apiKey = 'your_api_key_here';
```
4️⃣ Run the App Locally
Open index.html in a browser
OR use a local server (e.g., VS Code Live Server)
5️⃣ Deploy the App
Deploy to GitHub Pages, Netlify, or Vercel
🏗️ Code Structure
🌐 Fetching Weather Data (script.js)
javascript
Copy
Edit
async function fetchWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    updateUI(data);
}
🌡️ Updating UI with Weather Data
```javascript

function updateUI(data) {
    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('weather').innerText = data.weather[0].description;
}
```

📍 Getting User Location
```javascript

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    fetchWeatherByLocation(latitude, longitude);
});
```

📚 API Reference
This app uses the OpenWeatherMap API to fetch weather data.

🌡️ Current Weather
```url
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={apiKey}
```

📆 5-Day Forecast
```url
https://api.openweathermap.org/data/2.5/forecast?units=metric&q={city}&appid={apiKey}
```

📍 Weather by Location
```url

https://api.openweathermap.org/data/2.5/weather?units=metric&lat={latitude}&lon={longitude}&appid={apiKey}
```
📂 Project Structure
```pgsql

weather-app/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets/
│   └── icons/
├── README.md
├── package.json
└── .gitignore
```

🔧 Environment Variables
Create a .env file in the root directory:

```env
API_KEY=your_openweather_api_key
PORT=3000
```
🤝 Contributing
Fork the repository
Create a feature branch
```bash

git checkout -b feature/AmazingFeature
```
Commit your changes
```bash

git commit -m "Add some AmazingFeature"
```
Push to the branch
```bash

git push origin feature/AmazingFeature
```
Open a Pull Request
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.




