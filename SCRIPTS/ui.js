import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@1.11.13/+esm";
import { weatherHistory } from "./weatherHistory.js";

const currentCityName = document.querySelector(".current-city-name");
const currentDate = document.querySelector(".current-date");
const currentCityTemperature = document.querySelector(
  ".current-city-temperature",
);
const currentCityTemperatureDescription = document.querySelector(
  ".temperature-description",
);
const currentWeatherIconContainer = document.querySelector(
  ".current-weather-icon",
);
const currentHumidity = document.querySelector(".current-humidity-value");
const currentWind = document.querySelector(".current-wind-value");
const currentVisibility = document.querySelector(".current-visibility-value");
const currentPressure = document.querySelector(".current-pressure-value");
const currentUserCity = document.querySelector(".current-user-city");

export function renderCurrentCityWeather(weatherData) {
  currentCityName.textContent = `${weatherData.cityName}, ${weatherData.country}`;
  currentDate.textContent = dayjs().format("dddd D, MMMM");
  currentCityTemperature.textContent = `${weatherData.temperature}°`;
  currentCityTemperatureDescription.textContent = weatherData.description;
  currentHumidity.textContent = `${weatherData.humidity}%`;
  currentWind.textContent = `${weatherData.wind}Km/h`;
  currentVisibility.textContent = `${weatherData.visibility / 1000}km`;
  currentPressure.textContent = `${weatherData.pressure}hpa`;
  currentUserCity.textContent = `${weatherData.cityName}, ${weatherData.country}`;

  const weatherIcon = currentWeatherIconContainer.querySelector("i");
  weatherIcon.className = "fas";
  weatherIcon.classList.add(getWeatherIconClass(weatherData));
}

function getWeatherIconClass(weatherData) {
  const id = weatherData.id;
  let icon;

  if (id >= 200 && id < 300) icon = "thunder";
  else if (id >= 300 && id < 400) icon = "drizzle";
  else if (id >= 500 && id < 600) icon = "rain";
  else if (id >= 600 && id < 700) icon = "snow";
  else if (id === 800) icon = "clear";
  else if (id > 800) icon = "clouds";

  let fontawesomeClass;

  if (icon === "thunder") fontawesomeClass = "fa-bolt";
  else if (icon === "drizzle") fontawesomeClass = "fa-cloud-rain";
  else if (icon === "rain") fontawesomeClass = "fa-cloud-showers-heavy";
  else if (icon === "snow") fontawesomeClass = "fa-snowflake";
  else if (icon === "clear") fontawesomeClass = "fa-cloud-sun";
  else if (icon === "clouds") fontawesomeClass = "fa-cloud";

  return fontawesomeClass;
}

const weatherHistoryContainer = document.querySelector(
  ".available-cites-container",
);

export function renderWeatherHistory() {
  weatherHistoryContainer.innerHTML = "";
  if (weatherHistory.length === 0) {
    weatherHistoryContainer.textContent = "You have no weather history";
  }
  const sortedWeatherHistory = weatherHistory.slice().reverse();
  sortedWeatherHistory.forEach((weatherData) => {
    const iconClass = getWeatherIconClass(weatherData);
    weatherHistoryContainer.innerHTML += `
      <div class="available-city-container" data-name=${weatherData.cityName}>
          <div class="left">
              <div class="city-weather-icon weather-icon ${weatherData.weatherConditon}-weather-icon">
                  <i class="fas ${iconClass}"></i>
              </div>
              <div class="weather-info">
                  <div class="city-name">${weatherData.cityName}</div>
                  <div class="city-weather-description">${weatherData.description}</div>
              </div>
          </div>
          <div class="right">
              <div class="city-temperature">${weatherData.temperature}</div>
          </div>
      </div>
    `;
  });
}

renderWeatherHistory();
