import { addItem } from "./UTILS/performance.js";

export const weatherHistory = getWeatherHistory();

export function getWeatherHistory() {
  return JSON.parse(localStorage.getItem("weather-history")) || [];
}

export function addToWeatherHistory(weatherData) {
  addItem(weatherData, weatherHistory);
  saveWeatherHistory();
}

function saveWeatherHistory() {
  localStorage.setItem("weather-history", JSON.stringify(weatherHistory));
}

export function clearWeatherHistory() {
  localStorage.removeItem("weather-history");
}

export function checkDuplicateWeatherData(weatherData) {
  const duplicateCityWeather = weatherHistory.find(
    (data) => data.cityName === weatherData.cityName,
  );
  return duplicateCityWeather;
}

export function findWeatherData(cityName) {
  const weatherData = weatherHistory.find((data) => data.cityName === cityName);
  return weatherData;
}
