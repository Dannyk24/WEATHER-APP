import { notify, showLoader, hideLoader } from "./component.js";
import { formatString } from "./UTILS/format.js";
import {
  fetchWeatherData,
  fetchUserCityWeather,
  getUserGeolocation,
} from "./api.js";
import { renderCurrentCityWeather, renderWeatherHistory } from "./ui.js";
import {
  checkDuplicateWeatherData,
  addToWeatherHistory,
  weatherHistory,
  findWeatherData,
} from "./weatherHistory.js";

const getWeatherCta = document.querySelector(".get-weather-cta");
const citySearchBar = document.querySelector(".main-search-bar");
getWeatherCta.addEventListener("click", () => {
  const city = formatString(citySearchBar.value);
  getWeather(city);
});
citySearchBar.addEventListener("search", () => {
  const city = formatString(citySearchBar.value);
  getWeather(city);
});
async function getWeather(city) {
  if (city.length === 0) {
    notify("error", "Invalid city search");
    return;
  }
  try {
    showLoader();
    const weatherData = await fetchWeatherData(city);
    addToWeatherHistory(weatherData);
    renderWeatherHistory();
    renderCurrentCityWeather(weatherData);
    notify("success", "Weather data fetched");
  } catch (error) {
    if (error.status === 404) {
      notify("error", "City not found");
    } else {
      notify("error", "Fetch failed");
    }
  } finally {
    hideLoader();
  }
}

async function getUserCityWeatherData() {
  const geolocation = await getUserGeolocation();
  try {
    showLoader();
    const weatherData = await fetchUserCityWeather(geolocation);
    renderCurrentCityWeather(weatherData);
    notify("success", "Weather data fetched");
  } catch (error) {
    if (error.status === 404) {
      notify("error", "City not found");
    } else {
      notify("error", "Fetch failed");
    }
  } finally {
    hideLoader();
  }
}

getUserCityWeatherData();

const weatherHistoryContainer = document.querySelector(
  ".available-cites-container",
);

weatherHistoryContainer.addEventListener("click", (e) => {
  if (!e.target.closest(".available-city-container")) {
    return;
  }
  const cityContainer = e.target.closest(".available-city-container");
  const cityName = cityContainer.dataset.name;

  const weatherData = findWeatherData(cityName);
  if (!weatherData) {
    notify("error", "Failed to load history data");
    return;
  }
  renderCurrentCityWeather(weatherData);
  notify("success", "History data fetched");
});
