import { fetchWeather } from './weatherApi.js'

document.addEventListener('DOMContentLoaded', () => {
  const weatherForm = document.getElementById('weather-form')
  const cityInput = document.getElementById('city-input')
  const weatherResult = document.getElementById('weather-result')
  const favouritesList = document.getElementById('favourites-list')

  class WeatherApp {
    constructor() {
      this.favourites = new Set(savedFavourites)
      // this.renderFavourites()
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
      if (event) event.preventDefault()
      cityInput.value = city
      this.fetchAndDisplayWeather(city)
    }

    // async - fetch and display weather
  }

  window.weatherApp = new WeatherApp()
  weatherForm.addEventListener('submit', event => weatherApp.handleSearch(event))
})