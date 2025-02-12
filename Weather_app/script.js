const apiKey = 'a8da43dcacmsh1a70327b13d68d6p1cf984jsna6e7ca53fbcc'; // Replace with your actual API key
const apiUrl = 'https://open-weather13.p.rapidapi.com/city/';

const searchBox = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherIcon = document.querySelector('.weather-icon');

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}/EN`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('City not found! Please enter a valid city.');
    }
}

// Function to update UI with fetched data
function updateWeatherUI(data) {
    document.querySelector('.city').innerText = data.name;
    const celsiusTemp = Math.round((data.main.temp - 32) * (5 / 9));
    document.querySelector('.temp').innerText = `${celsiusTemp}°C`;

    document.querySelector('.condition').innerText = data.weather[0].main;
    document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
    document.querySelector('.wind').innerText = `${data.wind.speed} km/h`;

    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = searchBox.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

// Event listener for Enter key in input field
searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});
