const API_KEY = "7ba5c95abb67afd9574eadea3d78b3cb";

const button = document.getElementById("getWeatherBtn");

button.addEventListener("click", () => {
  const cityName = document.getElementById("cityInput").value;

  if (cityName) {
    getWeather(cityName);
  } else {
    alert("Please enter a city name!");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    document.getElementById(
      "weatherResult"
    ).innerHtml = `<p>${error.message}</p>`;
  }
}


function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp.toFixed(0);
    const weatherDescription = weather[0].descpription;

    document.getElementById('weatherResult').innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temperature}° C</p>
    <p>Condition: ${weatherDescription}</p>
    `
}