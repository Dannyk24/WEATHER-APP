const API_KEY = "8da464d01ed1f994b87fef2269983985";

export async function fetchWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    const error = new Error();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();

  const weatherData = {
    id: data.weather[0].id,
    cityName: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    wind: data.wind.speed,
    weatherCondition: data.weather[0].main, //Main is the main weather e.g clear,clouds e.t.c
  };

  return weatherData;
}

export async function fetchUserCityWeather(geolocation) {
  const lon = geolocation.longitude;
  const lat = geolocation.latitude;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    const error = new Error();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();

  const weatherData = {
    id: data.weather[0].id,
    cityName: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    wind: data.wind.speed,
    weatherCondition: data.weather[0].main, //Main is the main weather e.g clear,clouds e.t.c
  };

  return weatherData;
}

const defaultGeolocation = {
  //Default geolocation uses london co-ordinates if location access is not allowed
  longitude: -0.1278,
  latitude: 51.5074,
};
export function getUserGeolocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      () => {
        resolve({
          longitude: defaultGeolocation.longitude,
          latitude: defaultGeolocation.latitude,
        });
      },
    );
  });
}
