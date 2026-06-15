# Weather Application

A weather application built with HTML, CSS, and JavaScript that provides real-time weather information for cities around the world. The application integrates with a weather API to retrieve live weather data and uses localStorage to improve performance and user experience.

## SITE IS LIVE AT
https://dannyk24.github.io/WEATHER-APP/

## Features

### Automatic Location Weather Detection

* Requests the user's geolocation permission when the application loads.
* Automatically retrieves weather data for the user's current location.
* Provides immediate weather information without requiring a manual city search.
* Uses the browser Geolocation API together with the weather API to deliver location-based weather updates.
* Enhances user experience by displaying relevant weather information as soon as the application opens.


### Live Weather Data

* Search for weather information by city name
* View real-time weather conditions
* Display key weather details including temperature and weather status
* Fetch up-to-date information directly from a weather API

### Weather History

* Stores the last four searched cities
* Allows users to quickly access previously viewed weather data
* Reduces unnecessary API requests by loading cached data from localStorage

### Data Source Indicator

* Displays whether weather information is being loaded from:

  * Live API data
  * Cached localStorage data
* Helps users distinguish between real-time and stored weather information

### User Experience

* Fast access to recently viewed cities
* Reduced network requests through local caching
* Clean and responsive interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* openWeatherMap API
* Local Storage API

## Concepts Practiced

* API Integration
* Asynchronous JavaScript
* Fetch API
* DOM Manipulation
* Event Handling
* Local Storage
* Data Caching
* Responsive Web Design

## How It Works

1. A user searches for a city.
2. The application fetches live weather data from the weather API.
3. The weather information is displayed on the page.
4. The city and its weather data are stored in localStorage.
5. When a user selects a recently viewed city, the application loads the stored data directly from localStorage instead of making another API request.
6. A status indicator shows whether the displayed data is live or cached.

## Future Improvements

* Multi-day weather forecasts
* Geolocation support
* Weather maps
* Temperature unit conversion
* Additional weather metrics

## Author

Daniel Olajire

GitHub: https://github.com/Dannyk24
