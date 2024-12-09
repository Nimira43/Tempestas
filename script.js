import { fetchWeather } from './weatherApi.js'

document.addEventListener('DOMContentLoaded', () => {
  const weatherForm = document.getElementById('weather-form')
  const cityInput = document.getElementById('city-input')
  const weatherResult = document.getElementById('weather-result')
  const favouritesList = document.getElementById('favourites-list')

  class WeatherApp {
    constructor() {
      this.favorites = new Set(savedFavorites);
      this.renderFavorites();
    }
    async handleSearch(event) {
    }
    displayWeather(data) {
    }
    addFavourite(city) {
    }
    removeFavorite(city) {
    }
    // update local storage
    renderFavorites() {
    }
    handleSearch(event, city) {
    }
    // async - fetch and display weather
  }

  window.weatherApp = new WeatherApp();
  // weatherForm.addEventListener('submit', event => weatherApp.handleSearch(event))
})